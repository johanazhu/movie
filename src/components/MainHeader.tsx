import { useState } from "react";

const MainHeader = () => {
  const [theme, setTheme] = useState("light");

  const onToggle = () => {
    console.log("点击");
    setTheme(theme === "light" ? "dark" : "light");
    const doc = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    // 设置页面根元素的 dataset
    doc.dataset.theme = newTheme;
    setTheme(newTheme);
  };
  return (
    <div className="movmov__mian-header" onClick={onToggle}>
      暗/亮
    </div>
  );
};

export default MainHeader;
