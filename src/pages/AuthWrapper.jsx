import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section className="loading page">
        <div className="wrapper">
          <div className="loader"></div>
        </div>
      </section>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
};

export default AuthWrapper;
