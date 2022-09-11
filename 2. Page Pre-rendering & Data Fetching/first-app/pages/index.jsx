export const getStaticProps = async () => {
  return {
    props: {
      products: [{ id: 1, title: 'Product 1' }],
    },
  };
};

const HomePage = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default HomePage;
