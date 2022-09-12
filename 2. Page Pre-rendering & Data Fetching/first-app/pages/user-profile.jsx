const UserProfilePage = (props) => {
  return <div>{props.username}</div>;
};

export default UserProfilePage;

export const getServerSideProps = async () => {
  return {
    props: {
      username: 'Skolo',
    },
  };
};
