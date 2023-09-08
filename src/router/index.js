import React, { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import { ContactSuccess, Home, Page404 } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/contact-success"
        element={
          <BaseLayout>
            <ContactSuccess />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
