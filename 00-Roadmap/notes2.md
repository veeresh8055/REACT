# React Forms Notes

---

## 1. Introduction to Forms in React

### Definition
Forms in React are used to collect user input and handle events. React provides a way to control form elements using component state.

### Use Case
Handling login/signup, search inputs, surveys, and data entry.

---

## 2. Building Basic Forms

### Structure
A basic form includes form elements like inputs and buttons wrapped in a `<form>` tag.

### Example
```jsx
function BasicForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 3. Creating Form Elements

### Common Elements
- `input` (text, checkbox, radio, password, etc.)
- `textarea`
- `select` with `<option>`

### Example
```jsx
<form>
  <input type="text" />
  <textarea />
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</form>
```

---

## 4. Two-way Binding with React

### Explanation
Two-way binding means the UI reflects the state, and user input updates the state.

### How to achieve
Use `useState` and update state on input change.

### Example
```jsx
function TwoWayBinding() {
  const [value, setValue] = React.useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

---

## 5. Handling Form Events

### Common Events
- `onChange` — track input changes
- `onSubmit` — handle form submission

### Preventing Default Behavior
```jsx
function handleSubmit(event) {
  event.preventDefault(); // prevent page reload
  // handle submit logic
}
```

### Example
```jsx
function Form() {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 6. Validation in React Forms

### Client-Side Validation
- Check inputs before submission.
- Provide feedback to users.

### Example
```jsx
function FormValidation() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (value) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      // proceed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 7. Integrating Forms with APIs

### Overview
Forms often send data to backend APIs for processing.

### Steps
- Capture form data
- Send via HTTP request
- Handle responses

---

## 8. Sending Form Data to Backend using `fetch` or `axios`

### Using fetch
```jsx
function handleSubmit(data) {
  fetch("https://api.example.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error));
}
```

### Using axios
```jsx
import axios from "axios";

function handleSubmit(data) {
  axios.post("https://api.example.com/submit", data)
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error));
}
```

---

## 9. Handling Loading States and Success/Error Feedback

### Loading States
Use a state variable to track loading and show a spinner or disable button.

### Example
```jsx
function FormWithLoading() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    fetch("https://api.example.com/submit", { method: "POST" })
      .then(() => {
        setSuccess("Form submitted successfully!");
      })
      .catch(() => {
        setError("Submission failed. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
```

---

# Summary

React forms involve creating controlled components that sync with component state, handling input changes and submissions, validating data on client-side, integrating with backend APIs using HTTP requests, and managing loading and feedback states to improve user experience.