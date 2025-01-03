import React from "react";
import Layout from "./layout";
import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app"));
root.render(<Layout />);
