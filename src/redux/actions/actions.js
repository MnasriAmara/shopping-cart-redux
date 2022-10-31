import { ADDTOCART, DETAILS,ADDQUANTITY,REMOVEROD,ADDTOTAL,
  REMOVETOTAL,REMOVEQUANTITY,UPDATECART, EDITPROD, ADDPROD, DELETEPROD,FILTERBYCATEGORY,
  FILTERBYNAME,
  FILTERBYRATE} 
from "../actionstypes/actionstypes";

export const addtocart = (newprd) => {
    return {
  
      type: ADDTOCART,
      payload: newprd,
    };
  };

  export const details =(id)=>{
    return{
    type:DETAILS,
    payload: id,
  }
};

export const removeprod = (id, prixtot) => {
  return {
    type: REMOVEROD,
    payload: { id, prixtot },
  };
};

export const addtotal = (prixun) => {
  return {
    type: ADDTOTAL,
    payload: prixun,
  };
};

export const addquantity = (id) => {
  return {
    type: ADDQUANTITY,
    payload: id,
  };
};

export const rmvtotal = (prixun) => {
  return {
    type: REMOVETOTAL,
    payload: prixun,
  };
};

export const rmvquantity = (id) => {
  return {
    type: REMOVEQUANTITY,
    payload: id,
  };
};

export const updatecart=(panier,total)=>{
  return{
    type:UPDATECART ,
    payload:panier,total
  };
};



export const editprod =(id,editprod)=>{
  return{
    type: EDITPROD,
    payload:{id,editprod}
  }
}

export const addprod=(newprod)=>{
  return{
    type:ADDPROD,
    payload: newprod
  }
}

export const deleteteprod=(id)=>{
  return{
    type: DELETEPROD ,
    payload: id
  }
}

export const filterbyname = (name) => {
  return {
    type: FILTERBYNAME,
    payload: name,
  };
};

export const filterbyrate = (rate) => {
  return {
    type: FILTERBYRATE,
    payload: rate,
  };
};

export const filterbycategory = (category) => {
  return {
    type: FILTERBYCATEGORY,
    payload: category,
  };
}



