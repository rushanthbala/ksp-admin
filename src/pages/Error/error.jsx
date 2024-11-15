import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    // console.log("oooooo",this.state);
    if (this.state.hasError) {
      // Redirect to error page
      return <Navigate to="/error" replace={true} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
