import axios from 'axios';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import TextWithBackground from '../../atoms/TextWithBackground/TextWithBackground';
import Bar from '../Bar/Bar';
import styles from './postUser.module.css';

const placeHolderObject = `{
  "id": number,
  "name": "string",
  "username": "string",
  "email": "string"
}
  `;

const PostUser = () => {
  const [btn, setBtn] = useState(true);
  const [content, setContent] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [responseHead, setResponseHead] = useState('');
  const [textArea, setTextArea] = useState(placeHolderObject);

  const handleClickPOST = async () => {
    setShowResponse(true);
    const response = await axios.post(`http://localhost:3000/api/user`, textArea);

    setShowResponse(true);
    setResponseHead(JSON.stringify(response.headers, null, 4));
    setContent(JSON.stringify(response.data, null, 4));
  };
  const handleShowBtn = () => {
    setBtn(!btn);
  };

  return (
    <div>
      <Bar
        text='Parameters'
        buttonText={btn ? 'Try it Out' : 'Cancel'}
        onclick={handleShowBtn}
      />

      {!btn && (
        <>
            <div>
              <Button text='Execute' onclick={handleClickPOST} />
            </div>
          <textarea
            disabled={btn}
            rows={7}
            cols={50}
            value={textArea}
            className={styles.textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
        </>
      )}

      {showResponse && (
        <>
          <div>
            <Text text='Request URL' />
            <TextWithBackground text={'http://localhost:3000/api/user'} />
          </div>
          <div>
            <Text text='Server response' />
            <TextWithBackground jsonText={content} />
          </div>
          <div>
            <Text text='Response headers' />
            <TextWithBackground jsonText={responseHead} />
          </div>
        </>
      )}
    </div>
  );
};

export default PostUser;
