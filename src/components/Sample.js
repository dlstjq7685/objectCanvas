import React, { useState, useEffect } from 'react';

function Example(props) {
  const { test, init } = props;
  const [count, setCount] = useState(init);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const increment = e => {
      setCount(count + test())
      
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  );
}

export default Example