import { useRouter } from 'next/router';
import Link from "next/link";
import {range} from "ramda";

const Docs = () => {
  const router = useRouter();
  const { query, route } = router;
  const { params = [] } = query;
  const [feature, concept, example] = params;

  const content = {
    1: `Docs for feature "${feature}"`,
    2: `Docs for feature "${feature}", concept "${concept}"`,
    3: `Docs for feature "${feature}", concept "${concept}", example "${example}"`,
  } as Record<number, string>;

  const currentContent = content[params.length];

  return (
    <>
      <h1>Docs page</h1>

      <Link href="/">Go to Home Page</Link>

      <ul>
        <li>
          <Link href={`${route}/feature1`}>Feature</Link>
        </li>
        <li>
          <Link href={`${route}/feature1/concept1`}>Feature with concept</Link>
        </li>
        <li>
          <Link href={`${route}/feature1/concept1/example1`}>Feature with concept and example</Link>
        </li>
      </ul>

      {currentContent && (
        <>
          <h2>Docs content:</h2>
          <p>{currentContent}</p>
        </>
      )}
    </>
  );
};

export default Docs;