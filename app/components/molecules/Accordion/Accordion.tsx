'use client'; // this is a client component 👈🏽
import { useState } from 'react';
import Tag from '../../atoms/Tag/Tag';
import Text from '../../atoms/Text/Text';
import styles from './accordion.module.css';

type props = {
  title: string;
  tag: string;
  children: any;
};

const Accordion = ({ title, tag, children }: props) => {
  const [expanded, setExpanded] = useState(false);

  const color = () => {
    switch (tag) {
      case 'POST':
        return styles.green;
      case 'GET':
        return styles.blue;
      case 'DELETE':
        return styles.red;
      case 'PUT':
        return styles.orange;
    }
  }

  const handleExpand = () => {
    setExpanded(!expanded)
  }
  return (
    <div>
      <button
        className={`${
          !expanded ? styles.button : styles.button_exp
        } ${color()}`}
        onClick={handleExpand}
      >
        <Tag text={tag}/>
        <Text text={title} />
      </button>
      {expanded && (
        <div className={`${color()} ${styles.container}`}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
