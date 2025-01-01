import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./index.less";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      Home
      <button
        onClick={() =>
          navigate("/home/first", {
            state: { a: 1 },
          })
        }
      >
        跳转到first
      </button>
    </div>
  );
};

export default Home;
