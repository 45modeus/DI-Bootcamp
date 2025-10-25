import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (
    <div style={{padding: "30px"}}>
      <h1>Error Boundary simulation</h1>

      <h2>Simulation 1: Both wrapped in one Error Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2: Each wrapped in seperate Error Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3: No error boundary wrapper</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;
