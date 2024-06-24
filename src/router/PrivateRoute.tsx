import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  child?: ReactNode;
}

const PrivateRoute = ({ child }: Props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{child}</>;
};

export default PrivateRoute;
