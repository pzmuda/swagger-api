import axios from 'axios';
import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import TextWithBackground from '../../atoms/TextWithBackground/TextWithBackground';
import Bar from '../Bar/Bar';
import styles from './deleteUser.module.css'
const DeleteUser = () => {
  const [btn, setBtn] = useState(true);
  const [content, setContent] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [responseHead, setResponseHead] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleClickDELETE = async () => {
    setShowResponse(true);
    const response = await axios.put(`http://localhost:3000/api/user/${id}`, {
      id: id,
      name: name,
    });
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
        <div>
          <div>
            <Button text='Execute' onclick={handleClickDELETE} />
          </div>
          <div className={styles.wrapper}>
            <label>ID</label>
            <input
              type='number'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}

      {showResponse && (
        <>
          <div>
            <Text text='Request URL' />
            <TextWithBackground text={`http://localhost:3000/api/user/${id}`} />
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

export default DeleteUser;
