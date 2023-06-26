import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <main className="mov__main">
      <Outlet />
    </main>
  );
};

export default Content;
