
import useProducts from '../Hooks/UseProducts';
import PlaceholderCards from './PlaceholderCards';
import ProductList from './ProductList';

const Products = () => {
   const [products,loading] =  useProducts();

  return (<div className="container py-3">
  {loading ? <PlaceholderCards/>:<ProductList products={products}/>}
</div>
  );
  
}

export default Products
