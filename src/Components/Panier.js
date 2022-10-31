import "./panier.css";
import { ProductCart } from "./ProductCart";
import { useSelector , useDispatch } from "react-redux";
import{updatecart} from "../redux/actions/actions";
export function Panier() {

  const pan = useSelector((state) => state.panier);
  const totalpro = useSelector((state) => state.total);
const dispatch = useDispatch()

  return (
    <div className="pannier">
      <div className="container">
        <div className="heading">
          <h1>
            <span className="shopper">Shopping Cart</span> 
          </h1>
          
        </div>
        <div className="cart transition is-open">
        <div className="btn btn-update" onClick={()=>dispatch(updatecart())}>
            Update cart
          </div>
          
          <div className="table">
            <div className="layout-inline row th">
              <div className="col col-pro">Product</div>
              <div className="col col-price align-center ">Price</div>
              <div className="col col-qty align-center">QTY</div>

              <div className="col">Total</div>
              <div className="col"></div>
            </div>
            {pan.map((el,i) => (<ProductCart prod={el}  key={el.id}/>))}

            <div className="tf">
              <div className="row layout-inline">
                
                <div className="col" />
              </div>
              <div className="row layout-inline">
                <div className="col">
                  <p>Total : {totalpro}</p>
                </div>
                <div className="col" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
