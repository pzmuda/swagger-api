import styles from './text.module.css';

type props = {
  text?: string;
}

const Text = ({ text }:props) => {
  return <div className={styles.text}>{text}</div>;
};

export default Text;
