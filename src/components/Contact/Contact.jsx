import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach me out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="_blank" href="mailto:ibrahimberkozkan34@gmail.com">ibrahimberkozkan34@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/ibrahimberkozkan34/">linkedin.com/in/ibrahimberkozkan34</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://www.github.com/brkozkn999">github.com/brkozkn999</a>
        </li>
      </ul>
    </footer>
  );
};
