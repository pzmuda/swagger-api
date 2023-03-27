'use client';
import axios from 'axios';
import { useState } from 'react';;
import Accordion from '../../molecules/Accordion/Accordion';
import AccordionContent from '../../molecules/AccordionContent/AccordionContent';


const placeHolderObject = `{
  "id": number,
  "name": "string",
  "username": "string",
  "email": "string"
}
  `;

const Users = () => {
  const [content, setContent] = useState({ get: '', post: '' });
  const [buttonText, setButtonText] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [responseHead, setResponseHead] = useState({
    headersPOST: '',
    headersGET: '',
  });

  const handleClickGET = async () => {
    const response = await axios.get('http://localhost:3000/api/user');
    setShowResponse(true);

    setResponseHead({
      ...responseHead,
      headersGET: JSON.stringify(response.headers, null, 4),
    });
    setContent({ ...content, get: JSON.stringify(response.data, null, 4) });
  };

  const handleClickPOST = async (body :string) => {
    setShowResponse(true);
    const response = await axios.post(`http://localhost:3000/api/user`, body);

    setResponseHead({
      ...responseHead,
      headersPOST: JSON.stringify(response.headers, null, 4),
    });
    setContent({ ...content, post: JSON.stringify(response.data, null, 4) });
  };

   const handleClickPUT = async (id: string, name:string) => {
     setShowResponse(true);
     const response = await axios.put(`http://localhost:3000/api/user/${id}`, {
       id: id,
       name: name,
     });

     setResponseHead({
       ...responseHead,
       headersPOST: JSON.stringify(response.headers, null, 4),
     });
     setContent({ ...content, post: JSON.stringify(response.data, null, 4) });
   };

  const handleShowText = () => {
    setButtonText(!buttonText);
  }


  return (
    <div>
      <h1 className='text-white	font-bold'>USERS</h1>
      <Accordion tag='GET' title={'/api/user'}>
        <AccordionContent
          buttonText={buttonText}
          showResponse={showResponse}
          responseHead={responseHead.headersGET}
          content={content.get}
          onSubmit={handleClickGET}
          handleShowText={handleShowText}
        />
      </Accordion>

      <Accordion tag='POST' title={'/api/user'}>
        <AccordionContent
          buttonText={buttonText}
          showResponse={showResponse}
          responseHead={responseHead.headersPOST}
          content={content.post}
          onSubmit={handleClickPOST}
          handleShowText={handleShowText}
          exampleValue={placeHolderObject}
        />
      </Accordion>

      <Accordion tag='PUT' title={'/api/user/{userI}'}>
        <AccordionContent
          buttonText={buttonText}
          showResponse={showResponse}
          responseHead={responseHead.headersPOST}
          content={content.post}
          onSubmit={handleClickPUT}
          handleShowText={handleShowText}
        />
      </Accordion>
    </div>
  );
};

export default Users;
