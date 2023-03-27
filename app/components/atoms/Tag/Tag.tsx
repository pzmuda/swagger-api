import styles from './tag.module.css'

type props = {
  text: string;
}

const Tag = ({ text }: props) => {
  return <div className={styles.tag}>{text}</div>;
};

export default Tag;
{
}
