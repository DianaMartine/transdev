import styles from "../../styles/components/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href="https://instagram.com/trans_dev/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="instagram-E4405F.svg"
          alt="instagram"
          width={500}
          height={500}
        />
      </a>
      <a
        href="https://youtube.com/channel/UCrvkNV7byf3t4QLzM5TVxfA"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="YouTube-FF0000.svg"
          alt="youtube"
          width={500}
          height={500}
        />
      </a>{" "}
      <a
        href="https://github.com/dianamartine"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="GitHub-100000.svg" alt="github" width={500} height={500} />
      </a>{" "}
      <p>Todos os direitos reservados&copy; 2021</p>
    </div>
  );
}
