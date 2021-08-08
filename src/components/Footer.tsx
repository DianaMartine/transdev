import styles from "../../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://instagram.com/trans_dev/" target="_blank" rel="noreferrer">
        <img
          src="https://img.shields.io/badge/instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
          alt="instagram"
        />
      </a>
      <a
        href="https://youtube.com/channel/UCrvkNV7byf3t4QLzM5TVxfA"
        target="_blank" rel="noreferrer"
      >
        <img
          src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
          alt="youtube"
        />
      </a>{" "}
      <a href="https://github.com/dianamartine" target="_blank" rel="noreferrer">
        <img
          src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
          alt="github"
        />
      </a>{" "}
      <p>Todos os direitos reservados&copy; 2021</p>
    </div>
  );
}
