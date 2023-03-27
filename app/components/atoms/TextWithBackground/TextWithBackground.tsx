import styles from './textWithBackground.module.css';

type props = {
  text?: string;
  jsonText?:string;
};

const TextWithBackground = ({ text, jsonText }: props) => {
  return <div className={styles.txt_bgc}>
    {jsonText ?
      (<pre>
        <code>
          {jsonText}
        </code>
    </pre>):
    text}
  </div>;
};

export default TextWithBackground;