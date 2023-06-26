import { MainHeader } from "../components";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <MainHeader />
      <div className={style.wrapper}>
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
