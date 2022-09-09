import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // router.push('/clients/skolo/projecta');
    //alternative from Next.js
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'skolo', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
