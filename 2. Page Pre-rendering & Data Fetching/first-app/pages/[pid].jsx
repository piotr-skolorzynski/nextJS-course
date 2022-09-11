import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = ({ loadedProduct }) => {
  if (!loadedProduct) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>;
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((item) => item.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => {
    return { params: { pid: id } };
  });

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default ProductDetailPage;
