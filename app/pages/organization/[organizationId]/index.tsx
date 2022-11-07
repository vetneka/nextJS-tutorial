import { useRouter } from 'next/router'
import Link from 'next/link';

const OrganizationDetails = () => {
  const router = useRouter();
  const { query, asPath } = router;
  const { organizationId } = query;

  return (
    <>
      <h1>Organization {organizationId} Details Page</h1>

      <ul>
        <li>
          <Link href={`${asPath}/review`}>Reviews</Link>
        </li>
      </ul>
    </>
  )
};

export default OrganizationDetails;
