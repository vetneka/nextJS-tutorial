import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import {isEmpty} from "ramda";

type User = {
  id: number,
  name: string,
  email: string,
};

type UserProps = {
  user: User,
}

const UserDetail: React.FC<UserProps> = (props) => {
  const { user } = props;
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Organization User Details Page</h1>
      <div>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
};

export default UserDetail;

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(USERS_URL);
  const users = await response.json() as User[];

  const paths = users.slice(0, 5).map(user => ({
    params: { userId: String(user.id) },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<{ user: User}> = async (context) => {
  const { params } = context;
  // @ts-ignore
  const { userId } = params;

  const response = await fetch(`${USERS_URL}/${userId}`);
  const user: User = await response.json();

  if (isEmpty(user)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    }
  };
};