import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/search');
  };

  return (
    <>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/docs">Docs</Link>
        </li>
        <li>
          <Link href="/organization">Organization</Link>
        </li>
      </ul>

      <div>
        <button onClick={handleClick}>Go to Search page</button>
      </div>
    </>
  )
};

export default Home;
