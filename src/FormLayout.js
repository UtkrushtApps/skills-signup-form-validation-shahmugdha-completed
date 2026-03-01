import React, { memo } from "react";

function FormLayout({ children }) {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Utkrusht Skills Signup</h1>
        <p>Register to take your first proof-of-skills assessment.</p>
      </header>
      <main className="app-main">{children}</main>
    </div>
  );
}

export default memo(FormLayout);
