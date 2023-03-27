import DeleteUser from '../DeleteUser/DeleteUser';
import GetUser from '../GetUser/GetUser';
import PostUser from '../PostUser/PostUser';
import PutUser from '../PutUser/PutUser';

type props = {
  tag:String
};

const AccordionContent = ({ tag }: props) => {

  const renderMethod = () => {
       switch (tag) {
         case 'POST':
           return <PostUser />;
           case 'GET':
             return <GetUser/>;
         case 'DELETE':
           return <DeleteUser/>;
           case 'PUT':
           return <PutUser />;
       }
  }
  return <div>{renderMethod()}</div>;
};

export default AccordionContent;
