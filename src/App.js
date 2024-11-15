import React, { Suspense } from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./pages/Error/error";

function App() {
  return (
    <div>
      <Suspense>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
