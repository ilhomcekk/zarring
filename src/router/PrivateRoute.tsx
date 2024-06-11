import { ReactNode } from "react";

interface Props {
  child?: ReactNode;
}

const PrivateRoute = ({ child }: Props) => {
  return <>{child}</>;
};

export default PrivateRoute;
