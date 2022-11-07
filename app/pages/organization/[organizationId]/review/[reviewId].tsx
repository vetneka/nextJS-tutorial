import { useRouter } from 'next/router'

const ReviewDetails = () => {
  const router = useRouter();
  const { query } = router;
  const { organizationId, reviewId } = query;

  return <h1>Organization {organizationId} Review Details Review {reviewId} Page</h1>;
};

export default ReviewDetails;
