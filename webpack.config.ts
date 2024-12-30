import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: {
    main: {
      import: "./src/index.ts",
      dependOn: "shared",
    },
    shared: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[contenthash:8].js",
    clean: true,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  devtool: "inline-source-map",
  mode: "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"), // 将 @ 映射到 src 目录
    },
    extensions: [".ts", ".tsx", ".js", ".json"], // 确保支持 TypeScript 文件
  },
  module: {
    rules: [
      { test: /\.ts(x)?$/, loader: "ts-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
export default config;
