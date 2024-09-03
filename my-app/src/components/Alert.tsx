import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export const Alert = ({ children }: Props) => {
  return <div className="alert alert-success">{children}</div>;
};

export default Alert;
