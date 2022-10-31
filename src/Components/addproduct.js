import React, { useState } from 'react'
import "./addproduct.css"
import { useDispatch } from 'react-redux'
import { addprod } from '../redux/actions/actions'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
    const [newprod, setNewprod] = useState({
      name: "",
      id:"",
      rate: "",
      price: "", 
      category:"",
      img: "",
      desc: "",
    });

    const handelSubmit = (e) => {
      e.preventDefault();
  
      dispatch(addprod({ ...newprod, id: Math.random() }));
      
      setNewprod({ image: "", name: "", price: "", desc: "", rate: "" ,category:""});
      // closeModal();
      navigate("/");
    };
  
    const handelchange = (e) => {
      setNewprod({ ...newprod, [e.target.name]: e.target.value });
    };
    
  return (

    
    <div class="container">  
  <form id="contact" action="" method="post" onSubmit={handelSubmit}>
    <h3>Add New Product</h3>
    
    <fieldset>
      <input placeholder="Product Name" name="name" type="text" tabindex="1" onChange={handelchange}
          value={newprod.name} required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Product Photo" name="img" type="url" tabindex="2" onChange={handelchange}
          value={newprod.img} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Category" name="category" type="text" tabindex="3" onChange={handelchange}
          value={newprod.category} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Rate" name="rate" type="number" tabindex="4" onChange={handelchange}
          value={newprod.rate} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Price" name="price" type="number" tabindex="4" onChange={handelchange}
          value={newprod.price} required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Product Description"  tabindex="5" onChange={handelchange}
          value={newprod.description} required></textarea>
    </fieldset>
    <fieldset className="btnsubmit">
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending"
       onClick={() => navigate("/")}> Cancel </button>
    </fieldset>
  </form>

    </div>
 )
}
export default AddProduct