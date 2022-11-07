import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Users.module.css';

type User = {
  id: number,
  name: string,
};

type UsersProps = {
  users: User[],
};

const Users: React.FC<UsersProps> = (props) => {
  const { users } = props;

  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <h1 className={styles.title}>Organization Users Page</h1>

      <ul>
        <li>
          <Link href={`${asPath}/my`}>My</Link>
        </li>
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link href={`${asPath}/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
};

export default Users;

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const getStaticProps = async () => {
  const response = await fetch(USERS_URL);
  const users = await response.json();

  return {
    props: {
      users: users.slice(0, 5),
    }
  };
}