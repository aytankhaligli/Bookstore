import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import FileBox from "../FileBox";
import styles from "./DashBoard.module.css";
function DashBoard() {
  const { filesList } = useContext(LoginContext);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Personal files</h1>
      </header>
      {filesList?.map((file) => (
        <FileBox key={file.entry.id} file={file.entry} />
      ))}
    </div>
  );
}

export default DashBoard;
