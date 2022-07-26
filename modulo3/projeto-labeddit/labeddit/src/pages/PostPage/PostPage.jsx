import { useEffect, React } from "react";
import { useNavigate } from "react-router";
import { GoTo } from "../../functions/GoTo";

export const PostPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      GoTo(navigate, "/");
    }
  }, []);
  return <div>PostPage</div>;
};
