import { Link } from "react-router-dom";
import "./prod.css";
import { RiDeleteBin6Line } from 'react-icons/ri' 
import { FaRegEdit } from "react-icons/fa";
 import {useDispatch} from "react-redux"
import { addtocart, deleteteprod } from "../redux/actions/actions";


export function Prod({ produit:{id,name,rate, category, img,price,description}}) {
  const dispatch=useDispatch()
    return (
    <div className="wrapper">
      <div className="product-img">
        <img src={img} height={380} width={327} alt="" />
        
      </div>
      <div className="product-info">
      <Link to={`/details/${id}`}>
              see Details
      </Link>
        <div className="product-text">
          <h1>{name}</h1>
          <h2> {category}</h2>
          <p> {description} </p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>{price}</span>dt
          </p>{" "}
          <br />
          <div style={{ display: "flex" ,justifycontent:"space-between"}}>
            <div>
             <RiDeleteBin6Line onClick={() => dispatch(deleteteprod(id))}  style={{width:35 , height:40,justifyContent:"center"}}/>
            </div>
          <div>
            <Link to={`/edit/${id}`}>  
            <FaRegEdit style={{width:40 , height:40}} />


            </Link>
          </div>
            
            <Link to="/panier">
              <button type="button">Go to Cart</button>
            </Link>
            <button type="button" onClick={() => dispatch(addtocart({id,name,price,img}))}>
              buy now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
