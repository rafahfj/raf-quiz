import { Outlet, Navigate } from "react-router-dom";
import { useQuestion } from "../../context/QuestionContext";

function RequireAuth() {
  const { auth } = useQuestion();

  return !auth?.email ? <Navigate to={"/login"} replace={true} /> : <Outlet />;
}

export default RequireAuth;
