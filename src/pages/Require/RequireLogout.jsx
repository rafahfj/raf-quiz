import { Outlet, Navigate } from "react-router-dom";
import { useQuestion } from "../../context/QuestionContext";

function RequireAuth() {
  const { auth } = useQuestion();

  return auth?.email ? <Navigate to={"/"} replace={true} /> : <Outlet />;
}

export default RequireAuth;
