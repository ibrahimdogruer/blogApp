import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>
      <b>Hey İbrahim here!</b> Discover my stories and creative ideas.
    </h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.imgContainer} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p className={styles.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, accusamus recusandae hic reiciendis libero expedita architecto ea tenetur illum nostrum facilis consectetur, officia, ipsam minus dolores atque. Distinctio, iure possimus.</p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  </div>;
};

export default Featured;
