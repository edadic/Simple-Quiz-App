import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Simple Quiz App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Quiz App</p>
      </footer>
    </div>
  );
};

export default Layout;
