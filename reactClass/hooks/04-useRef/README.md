# useRef Hook

The `useRef` hook is a React hook that allows you to create a reference to a DOM element or a value that persists across renders without causing re-renders when its value changes.

example usage:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      This is a div element.
    </div>
  );
}
```
