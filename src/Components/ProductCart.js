import { useDispatch } from "react-redux";
import{addquantity, addtotal, removeprod, rmvquantity,rmvtotal,} from "../redux/actions/actions";

export function ProductCart({prod}) {
  
const dispatch=useDispatch()
  return (
    <div className="layout-inline row">
      <div className="col col-pro layout-inline">
        <img src={prod.img} alt="kitten" />
        <p>{prod.name}</p>
      </div>
      <div className="col col-price col-numeric align-center ">
        <p>{prod.price} dt</p>
      </div>
      <div className="col col-qty layout-inline">
        <button href="#" className="qty qty-minus"  onClick={()=> (prod.qteA>1 ? dispatch(rmvquantity(prod.id))
                                                   && dispatch(rmvtotal(prod.price)) : null)}>
          -
        </button>
        <input
          type="numeric"
          value={prod.qteA}
          onChange={() => dispatch(rmvquantity(prod))}/>

        <button className="qty qty-plus" onClick={()=>dispatch(addquantity(prod.id))
                                                   && dispatch(addtotal(prod.price))} >
          +
        </button>
      </div>
      
      <div className="col col-total col-numeric">
        <p>{prod.prt} dt</p>
      </div>
      <div className="col col-vat col-numeric">
        <button onClick={() => dispatch(removeprod(prod.id, prod.prt))}>X</button>
      </div>
    </div>
  );
}
