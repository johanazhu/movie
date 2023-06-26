import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <main className="movmov__main">
      <Outlet />
    </main>
  );
};

export default Content;
