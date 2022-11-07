import Link from 'next/link';
import { useRouter } from 'next/router';
import { range } from 'ramda';

const Users = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <h1>Organization Users Page</h1>

      <ul>
        <li>
          <Link href={`${asPath}/my`}>My</Link>
        </li>
        {range(1, 4).map(item => {
          return (
            <li key={item}>
              <Link href={`${asPath}/${item}`}>User {item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
};

export default Users;
