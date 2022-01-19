import React from "react";
import styles from "./CSSModule.module.css";

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
      <div className={styles.wrapper}>화성에서 왔습니다.</div>
    </div>
  );
};

export default CSSModule;
