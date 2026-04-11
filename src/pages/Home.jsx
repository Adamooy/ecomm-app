import { getProducts } from '../data/products'
import ProductCard from '../components/ProductCard';

export default function Home(){
    const products = getProducts();

    return <div className="page">
        <div className="home-hero">
            <div className="home-title">Welcome to Shopipipi</div>
            <p className="home-subtitle">
                Discover products at great prices
            </p>
        </div>
        <div className="container">
            <h2 className="page-title">Our products</h2>
            <div className='product-grid'>
                {products.map((product) => (
                   <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </div>
    </div>
}