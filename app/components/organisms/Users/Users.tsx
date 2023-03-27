'use client';
import Accordion from '../../molecules/Accordion/Accordion';
import AccordionContent from '../../molecules/AccordionContent/AccordionContent';

const data = [
  {
    tag: 'GET',
    title: '/api/user',
  },
  {
    tag: 'POST',
    title: '/api/user',
  },
  {
    tag: 'PUT',
    title: '/api/user/{userId}',
  },
  {
    tag: 'DELETE',
    title: '/api/user/{userId}',
  },
];
const Users = () => {

  return (
    <div>
      <h1 className='text-white	font-bold'>USERS</h1>
      {data.map(user => {
        return (
          <Accordion tag={user.tag} title={user.title} key={user.tag}>
            <AccordionContent tag={user.tag} />
          </Accordion>
        );
      })}
    </div>
  );
};

export default Users;
