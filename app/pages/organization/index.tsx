import Link from 'next/link';
import { useRouter } from 'next/router';
import { range } from 'ramda';
import styles from './Organization.module.css';

const Organization = () => {
  const router = useRouter();
  const { route } = router;

  return (
    <>
      <h1 className={styles.title}>Organization Page</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`${route}/accounting`}>Accounting</Link>
        </li>
        <li>
          <Link href={`${route}/users`}>Users</Link>
        </li>
        {range(1, 5).map(item => {
          return (
            <li key={item}>
              <Link href={`${route}/${item}`}>Organization {item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Organization;
