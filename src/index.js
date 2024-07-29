import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RootLayout from "./layout/RootLayout";
import { action as registerAction } from "./pages/Register/RegisterPage";
import { action as loginAction } from "./pages/Login/LoginPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  LoginPage,
  Question,
  RegisterPage,
  NotFound,
  SingleQuestion,
  RequireAuth,
  RequireLogout,
  Success,
} from "./pages";
import { QuestionProvider } from "./context/QuestionContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route element={<RequireLogout />}>
        {/* User Need to logout */}
        <Route path="login" element={<LoginPage />} action={loginAction} />
        <Route
          path="register"
          element={<RegisterPage />}
          action={registerAction}
        />
      </Route>

      <Route element={<RequireAuth />}>
        {/* User need to login */}
        <Route index element={<App />} />
        <Route path="question" element={<Question />} />
        <Route path="question/:id" element={<SingleQuestion />} />
        <Route path="finish" element={<Success />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuestionProvider>
      <RouterProvider router={router} />
    </QuestionProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
