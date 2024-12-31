import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config: Configuration = {
  entry: {
    main: {
      import: "./src/app.tsx",
      dependOn: "shared",
    },
    shared: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[contenthash:8].js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  mode: "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"), // 将 @ 映射到 src 目录
    },
    extensions: [".ts", ".tsx", ".js", ".json"], // 确保支持 TypeScript 文件
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "automatic" }],
              ["@babel/preset-typescript"],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    liveReload: true, // 自动刷新
    hot: true,
  },
};
export default config;
