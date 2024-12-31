import React, { lazy, Suspense, ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// 使用 Webpack 的 require.context 动态加载 pages 文件夹中的组件
const pages = require.context("../pages", true, /\.tsx$/);

/** 递归生成路由的函数 */ 
const generateRoutes = (context: __WebpackModuleApi.RequireContext) => {
  const routes: ReactElement[] = [];

  context.keys().forEach((key) => {
    const path = key
      .replace("./", "")
      .replace(".tsx", "")
      .replace(/\/index$/, "") // 将嵌套路由文件的名称 "Index.tsx" 转换为父目录路由
      .replace(/\//g, "/"); // 保证嵌套路由的路径

    console.log("path=======>", path, key, context(key));

    const Component = lazy(() => import(`${context(key)}`));

    routes.push(
      <Route
        key={path}
        path={`/${path}`}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  });

  return routes;
};

const App = () => {
  return (
    <Router>
      <Routes>{generateRoutes(pages)}</Routes>
    </Router>
  );
};

export default App;
