import "./d.css"
 
import { useParams } from 'react-router-dom';
import { addtocart, details } from "../redux/actions/actions";
import { useSelector,useDispatch } from "react-redux";
import{useEffect} from "react"

const ProductDetails = () => {
  
  const dispatch = useDispatch()   
  const  { idprod } = useParams();

  useEffect(() => {
    dispatch(details(idprod));
  }, [dispatch,idprod]);
  

  const prod=useSelector((state)=>state.detailsprod)
  console.log(prod)
    return (
      <main className="containerc">
        {/* Left Column / Headphones Image */}
        <div className="left-column">
          <img data-image="black" src={prod.img} alt="" />
          <img data-image="blue" src={prod.img}alt="" />
          <img data-image="red" className="active" src={prod.img}alt="" />
        </div>
        {/* Right Column */}
        <div className="right-column">
          {/* Product Description */}
          <div className="product-description">
          
            <h1>{prod.name}</h1>
            <p>
              {prod.description}
            </p>
          </div>
  
          {/* Product Pricing */}
          <div className="product-price">
            <span>{prod.price}</span>
            <button onClick={()=>dispatch(addtocart({...prod}))}  className="cart-btn">
              Add to cart
            </button>
          </div> 
        </div>
      </main>
    );
  };
  
  export default ProductDetails;