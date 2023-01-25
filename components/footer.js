import React from 'react';
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.colSm4}>
            <h4 className={styles.footerHeading}>About Us</h4>
            <p className={styles.footerText}>
              Welcome to my blog! I am a writer and enthusiast, sharing my thoughts and experiences on a variety of
              topics. From personal growth to current events, there is something for everyone here. Thank you for
              stopping by and I hope you enjoy reading my posts as much as I enjoy writing them.
            </p>
          </div>
          <div className={styles.colSm4}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <p className={styles.footerText}>
              If you have any questions or comments, please feel free to reach out to me at <a href="mailto:info@myblog.com" className="footer-link">info@myblog.com</a>. I would love to hear from you!
            </p>
          </div>
          {/*<div className={styles.colSm4}>
            <h4 className={styles.footerHeading}>Follow Us</h4>
            <ul className={styles.footerList}>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
