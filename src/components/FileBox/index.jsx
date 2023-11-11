import styles from "./FileBox.module.css";
import documentIcon from "../../assets/document.svg";
import imageIcon from "../../assets/image-icon.svg";
import folderIcon from "../../assets/folder.svg";
import wordIcon from "../../assets/word.svg";

function FileBox({ file }) {
  console.log(file);
  const date = new Date(file.modifiedAt);
  const today = new Date();
  const timeDifference = today - date;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  return (
    <div className={styles.container}>
      <img
        src={
          file.isFile
            ? file.name.slice(-3) === "txt"
              ? documentIcon
              : imageIcon
            : folderIcon
        }
        className={styles.image}
      />
      <div className={styles.name}>
        <p>{file.name}</p>
      </div>
      {file.isFile && (
        <p className={styles.time}>{file.content.sizeInBytes} Bytes </p>
      )}
      <p className={styles.time}>
        {`${daysAgo === 0 ? hoursAgo + " hours ago" : daysAgo + " days ago"}`}
      </p>
      <p>{file.modifiedByUser.displayName}</p>
    </div>
  );
}

export default FileBox;
