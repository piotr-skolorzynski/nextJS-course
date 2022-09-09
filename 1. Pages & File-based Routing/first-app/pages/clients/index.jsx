import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    {
      id: 'piotr',
      name: 'Piotr',
    },
    {
      id: 'magda',
      name: 'Magdalena',
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            // <li key={client.id}>
            //   <Link href={`/clients/${client.id}`}>{client.name}</Link>
            // </li>
            //alternative solution for href in Link given by Next.js
            <li key={client.id}>
              <Link
                href={{ pathname: '/clients/[id]', query: { id: client.id } }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
