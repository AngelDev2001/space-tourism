import { Route, Routes } from "react-router-dom";
import { Home, Destination, Crew, Technology } from "../pages";
import { Layout } from "../components";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/destination"
        element={
          <Layout>
            <Destination />
          </Layout>
        }
      />
      <Route
        path="/crew"
        element={
          <Layout>
            <Crew />
          </Layout>
        }
      />
      <Route
        path="/technology"
        element={
          <Layout>
            <Technology />
          </Layout>
        }
      />
    </Routes>
  );
};
