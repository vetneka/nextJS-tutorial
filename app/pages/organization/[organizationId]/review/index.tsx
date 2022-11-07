import { useRouter } from 'next/router'
import Link from 'next/link';
import { range } from 'ramda';

const Review = () => {
  const { query, asPath } = useRouter();
  const { organizationId = '10' } = query;

  const maxReviewCount = Number(organizationId) + 1;

  return (
    <>
      <h1>Organization {organizationId} Reviews Page</h1>

      <ul>
        {range(1, maxReviewCount).map(item => {
          return (
            <li key={item}>
              <Link href={`${asPath}/${item}`}>Review {item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
};

export default Review;
