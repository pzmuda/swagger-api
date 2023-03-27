import styles from './button.module.css';

type props = {
  onclick: any;
  text: string;
};
const Button = ({ onclick, text }: props) => {
  return <button onClick={onclick} className={styles.button}>{text}</button>;
};

export default Button;