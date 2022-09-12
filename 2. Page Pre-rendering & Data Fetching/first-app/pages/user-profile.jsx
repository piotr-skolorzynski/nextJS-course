const UserProfilePage = (props) => {
  return <div>{props.username}</div>;
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Skolo',
    },
  };
};
