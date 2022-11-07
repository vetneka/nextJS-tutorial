import { useRouter } from 'next/router';

const UserDetail = () => {
  const { query } = useRouter();
  const userId = query.userId;

  return (
    <h1>Organization Users User {userId} Details Page</h1>
  )
};

export default UserDetail;
