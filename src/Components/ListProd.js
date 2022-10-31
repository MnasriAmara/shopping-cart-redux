import React from "react";
import "./addprod.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Prod} from './Prod';

function ListProd(){
  const listProd=useSelector((state)=>state.list) 
  const filtredname=useSelector(state=>state.filtredname)
  const rate=useSelector(state=>state.rate)
  const category=useSelector(state=>state.category)
    return(
      <div>
        <Link to="/addprod"><button className="addprod"> Add New Product </button></Link>
        <div style={{display:"flex" , justifyContent:"space-around", flexWrap:"wrap" }}>

          
    {category=="ALL" ?
     listProd.filter(
      el=>el.name
      .toLowerCase()
      .includes(filtredname.toLowerCase())&& el.rate >=rate
   
    ).map(el=> <Prod produit={el} key={el.id}/>)
    :
    listProd.filter(
      el=>el.name
      .toLowerCase()
      .includes(filtredname.toLowerCase())&& el.rate >=rate
      && el.category==category
    ).map(el=> <Prod produit={el} key={el.id}/>)
    }

        </div>
        </div>
    )
}
export default ListProd