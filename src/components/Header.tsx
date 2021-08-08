import styles from "../../styles/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1><a href=".">TransDev</a></h1>
      <nav>
        <ul>
          <li>
            <a href="."><span>Início</span></a>
          </li>
          <li>
            <a href=""><span>Sobre</span></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
