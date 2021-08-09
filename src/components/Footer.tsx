import styles from "../../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://instagram.com/trans_dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/instagram-E4405F.svg" alt="instagram" />
      </a>
      <a
        href="https://youtube.com/channel/UCrvkNV7byf3t4QLzM5TVxfA"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/YouTube-FF0000.svg" alt="youtube" />
      </a>{" "}
      <a
        href="https://github.com/dianamartine"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/GitHub-100000.svg" alt="github" />
      </a>{" "}
      <p>Todos os direitos reservados&copy; 2021</p>
    </div>
  );
}
