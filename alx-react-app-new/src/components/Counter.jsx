import React, { useState } from 'react'; // Import useState hook

function Counter() {
  // Initialize state for the count, starting at 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the current count */}
      <p>Current Count: {count}</p>
      
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      {/* Button to decrement the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      
      {/* Button to reset the count to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;