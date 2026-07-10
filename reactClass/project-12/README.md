# React Context Hook (`useContext`) - Complete Notes

# What is Context?

Context is a React feature that allows you to share data between components **without passing props manually at every level**.

Normally, data flows from parent to child using props.

Example:

App → Navbar → Profile → User

If `User` needs the username, we pass props through every component.

This is called **Prop Drilling**.

Context solves this problem.

---

# Definition

> Context provides a way to pass data through the component tree without manually passing props at every level.

---

# Why do we use Context?

Without Context:

- Too many props
- Difficult to maintain
- Every middle component receives props it doesn't need

With Context:

- Data becomes globally available
- Cleaner code
- Easy state sharing

---

# Common Use Cases

- User Authentication
- Theme (Dark / Light)
- Language
- Shopping Cart
- Notifications
- User Profile
- Global Settings

---

# How Context Works

There are three steps.

```
Create Context
       ↓
Provide Context
       ↓
Consume Context
```

---

# Step 1 - Create Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

This creates a context object.

---

# Step 2 - Provide Context

Wrap the components that need the data.

```jsx
<UserContext.Provider value={"Veeresh"}>
    <App />
</UserContext.Provider>
```

Everything inside the Provider can access the value.

---

# Step 3 - Consume Context

Use the `useContext()` hook.

```jsx
import { useContext } from "react";

const user = useContext(UserContext);

console.log(user);
```

Output

```
Veeresh
```

---

# Complete Example

## App.jsx

```jsx
import { createContext } from "react";
import Home from "./Home";

export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={"Veeresh"}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
```

---

## Home.jsx

```jsx
import Profile from "./Profile";

function Home() {
  return <Profile />;
}

export default Home;
```

---

## Profile.jsx

```jsx
import User from "./User";

function Profile() {
  return <User />;
}

export default Profile;
```

---

## User.jsx

```jsx
import { useContext } from "react";
import { UserContext } from "./App";

function User() {
  const name = useContext(UserContext);

  return <h1>{name}</h1>;
}

export default User;
```

Output

```
Veeresh
```

Notice that Home and Profile never receive props.

---

# Prop Drilling vs Context

Without Context

```
App
 │
 ▼
Home (passes props)
 │
 ▼
Profile (passes props)
 │
 ▼
User
```

Every component passes props.

---

With Context

```
App (Provider)
 │
 ▼
Home
 │
 ▼
Profile
 │
 ▼
User (useContext)
```

No prop drilling.

---

# Passing Objects

Instead of a string, we usually pass an object.

```jsx
const user = {
  name: "Veeresh",
  age: 22,
  city: "Bangalore",
};
```

Provider

```jsx
<UserContext.Provider value={user}>
```

Consume

```jsx
const user = useContext(UserContext);

return <h1>{user.name}</h1>;
```

---

# Passing Arrays

```jsx
const skills = ["React", "Node", "MongoDB"];
```

```jsx
<UserContext.Provider value={skills}>
```

```jsx
const skills = useContext(UserContext);

console.log(skills);
```

---

# Passing Functions

Context can also share functions.

```jsx
function login() {
    console.log("Logged In");
}
```

Provider

```jsx
<UserContext.Provider value={login}>
```

Consumer

```jsx
const login = useContext(UserContext);

<button onClick={login}>
Login
</button>
```

---

# Sharing State

One of the biggest uses of Context.

```jsx
const [theme, setTheme] = useState("light");
```

Provider

```jsx
<UserContext.Provider
value={{ theme, setTheme }}
>
```

Consumer

```jsx
const { theme, setTheme } = useContext(UserContext);
```

Update state

```jsx
<button
onClick={() => setTheme("dark")}
>
Dark Mode
</button>
```

---

# Multiple Values

```jsx
<UserContext.Provider
value={{
    name,
    age,
    theme,
    login,
    logout
}}
>
```

Consumer

```jsx
const {
    name,
    age,
    theme,
    login
} = useContext(UserContext);
```

---

# Multiple Contexts

You can create multiple contexts.

```jsx
const ThemeContext = createContext();

const UserContext = createContext();
```

Provider

```jsx
<ThemeContext.Provider value="dark">

<UserContext.Provider value="Veeresh">

<App />

</UserContext.Provider>

</ThemeContext.Provider>
```

Consume

```jsx
const theme = useContext(ThemeContext);

const user = useContext(UserContext);
```

---

# Folder Structure

```
src/

context/

    UserContext.jsx

App.jsx

Home.jsx

Profile.jsx

User.jsx
```

---

# UserContext.jsx

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

App.jsx

```jsx
import { UserContext } from "./context/UserContext";

<UserContext.Provider value="Veeresh">
<App />
</UserContext.Provider>
```

---

# Internal Flow

```
createContext()

        ↓

Creates Context Object

        ↓

Provider stores value

        ↓

React keeps value internally

        ↓

Child calls useContext()

        ↓

React returns nearest Provider value
```

---

# Real World Example

Imagine an E-commerce website.

Many components need the logged-in user.

```
App

Navbar

Sidebar

Cart

Orders

Profile

Settings
```

Without Context

Pass user props everywhere.

With Context

```
<UserContext.Provider value={user}>
```

Every component gets the same user.

---

# Advantages

- Eliminates prop drilling
- Cleaner code
- Easy global state sharing
- Built into React
- Great for themes and authentication
- Simple API

---

# Disadvantages

- Not a replacement for Redux/Zustand for very large applications
- Updating Context can re-render consuming components
- Too much global state makes debugging harder
- Can become difficult to manage if overused

---

# Best Practices

- Create separate contexts for different concerns (User, Theme, Cart)
- Keep providers close to where data is needed
- Avoid putting frequently changing state in a large global context
- Export the context from a dedicated `context/` folder
- Use custom hooks (e.g., `useUser()`) to simplify context consumption

---

# Interview Questions

## 1. What is Context API?

A way to share data globally without prop drilling.

---

## 2. What is useContext?

A React hook that reads the value from the nearest Context Provider.

---

## 3. What problem does Context solve?

Prop drilling.

---

## 4. Difference between props and Context?

| Props | Context |
|--------|---------|
| Parent to child | Global sharing |
| Manual passing | Automatic access |
| Good for local data | Good for shared data |

---

## 5. Can Context replace Redux?

No. Context is ideal for small to medium shared state. Redux, Zustand, or similar libraries are often better for complex global state with advanced debugging and middleware.

---

## 6. Can we have multiple Providers?

Yes.

---

## 7. Can Context store functions?

Yes.

---

## 8. Can Context store state?

Yes.

---

## 9. Does useContext create state?

No. It only reads the value from the nearest Provider.

---

## 10. Which hook is used with Context?

`useContext()`

---

# Summary

- `createContext()` creates a context object.
- `Provider` supplies the value.
- `useContext()` reads the nearest Provider's value.
- Context helps avoid prop drilling.
- It can share strings, objects, arrays, functions, and state.
- Common use cases include authentication, themes, shopping carts, and user settings.
- Use Context thoughtfully; don't put all application state into a single context.