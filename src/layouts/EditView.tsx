import { FC } from "react";
import { Outlet } from "react-router";

const EditView: FC = () => {
  return (
    <div>
      EditView
      <Outlet />
    </div>
  );
};

export default EditView;
