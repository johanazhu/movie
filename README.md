# MovMov

这个项目在2021年时笔者就想做了，辗转两年，终于有了空闲的时间及那份心

起因是笔者在写完 [移动端法门：自适应方案和高清方案](https://blog.azhubaby.com/2021/12/29/2021-12-22-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%B3%95%E9%97%A8%EF%BC%9A%E8%87%AA%E9%80%82%E5%BA%94%E6%96%B9%E6%A1%88%E5%92%8C%E9%AB%98%E6%B8%85%E6%96%B9%E6%A1%88/) 后，很想尝试一下 `px + calc + clamp` 这种布局方式





预计页面：5-7页（首页、类型、人物、电影详情、演员、搜索）

UI参考：taptap

接口采用 omdbapi、imdbapi 的公开 API

技术栈：vite + react + pnpm + ts + tailwind + axios  + zustand  + immer + pwa



## 开发计划

- [x] vite 初始化工程
- [x] 接入 react-router6，做好页面路由
- [x] CSS 初始化
  - [x] 字体解决方案（https://zenozeng.github.io/fonts.css/）
  - [x] CSS reset （normalize.css）
  - [x] 采用 css modules
- [ ] 配色决定
  - [ ] unocss
  - [ ] 亮/暗色
  - [ ] 加入autoprefixer
- [ ] 开始写首页
- [ ] 接入 动画库
- [ ] 接入 svg
- [ ] axios 接入接口
- [ ] 接入 zustand
- [ ] 接入 immer
- [ ] PWA
- [ ] 制作 logo

