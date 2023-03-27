import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import TextWithBackground from "../../atoms/TextWithBackground/TextWithBackground";
import Bar from "../Bar/Bar";

type props = {
  buttonText?: boolean;
  showResponse?: boolean;
  content?: string;
  responseHead?: string;
  handleShowText?: any;
  onSubmit?: any;
  exampleValue?: string;
  id?: number;
  name?: string;
};


const AccordionContent = ({
  buttonText,
  showResponse,
  responseHead,
  content,
  onSubmit,
  handleShowText,
  exampleValue,
}: props) => {
  const [textArea, setTextArea] = useState(exampleValue);


  return (
    <div>
      <Bar
        text='Parameters'
        buttonText={buttonText ? 'Try it Out' : 'Cancel'}
        onclick={handleShowText}
      />
      {!buttonText && (
        <div>
          <Button text='Execute' onclick={() => onSubmit(textArea)} />
        </div>
      )}
      {exampleValue && (
        <textarea
          disabled={buttonText}
          rows={7}
          cols={50}
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />
      )}
      {
        <div>
          <label>ID</label> <input type="number" />
          <label>name</label> <input type="text" />
        </div>
      }

      {showResponse && (
        <>
          <div>
            <Text text='Request URL' />
            <TextWithBackground text='http://localhost:3000/api/user' />
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

export default AccordionContent;