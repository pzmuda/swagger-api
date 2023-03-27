import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import styles from './bar.module.css';

type props = {
  text?: string;
  buttonText?: string;
  onclick?: any;
};

const Bar = ({ text, buttonText, onclick }: props) => {
  return (
    <div className={styles.bar}>
      <Text text={text} />

      {buttonText && <Button onclick={onclick} text={buttonText} />}
    </div>
  );
};

export default Bar;
