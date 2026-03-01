import React from "react";
import SignupForm from "./SignupForm";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Utkrusht Skills Signup</h1>
        <p>Register to take your first proof-of-skills assessment.</p>
      </header>
      <main className="app-main">
        <SignupForm />
      </main>
    </div>
  );
}

export default App;
