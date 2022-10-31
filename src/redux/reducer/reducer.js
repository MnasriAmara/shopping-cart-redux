import {
  ADDTOCART, DETAILS, ADDQUANTITY, REMOVEROD,  ADDTOTAL, REMOVETOTAL, 
  REMOVEQUANTITY, UPDATECART, EDITPROD, ADDPROD, DELETEPROD,FILTERBYCATEGORY,
  FILTERBYNAME,FILTERBYRATE} from "../actionstypes/actionstypes";

import { initstate} from "./initstate";

export const Reducer = (state = initstate, { type, payload }) => {
  switch (type) {   

    case ADDTOCART:
      const exist = state.panier.find((el) => el.id === payload.id);
      if (exist) {
        alert(`the ${payload.name} is added to the Cart`);
        return state;
      }
      return {
        ...state,
        panier: [{ ...payload, qteA: 1, prt: payload.price }, ...state.panier],
        total: Number(state.total) + Number(payload.price),
      };

    case DETAILS:
      return {
        ...state,
        detailsprod: state.list.find((el) => Number(el.id) === Number(payload)),
      };

    case REMOVEROD:
      
      return {
        ...state,
        panier: state.panier.filter((el) => el.id !== payload.id),
        total: state.total - payload.prixtot,
      };

    case ADDQUANTITY:
      return {
        ...state,
        panier: state.panier.map((el) =>
          el.id === payload
            ? { ...el, qteA: el.qteA + 1, prt: Number(el.prt) + Number(el.price) }
            : el
        ),
      };

    case ADDTOTAL:
      return {
        ...state,
        total: Number(state.total) + Number(payload),
      };

    case REMOVEQUANTITY:
      return {
        ...state,
        panier: state.panier.map((el) =>
          el.id === payload
            ? { ...el, qteA: el.qteA - 1, prt: Number(el.prt) - Number(el.price) }
            : el
        ),
      };

    case REMOVETOTAL:
      return {
        ...state,
        total: Number(state.total) - Number(payload),
      };

      case UPDATECART:
        return {
          ...state , panier:[] , total:0
        };

        // filter product:

        case FILTERBYNAME:
      return {
        ...state,
        filtredname: payload,
      };
    case FILTERBYRATE:
      return {
        ...state,
        rate: payload,
      };
    case FILTERBYCATEGORY:
      return {
        ...state,
        category: payload,
      };


        case EDITPROD:
          return{
            ...state,list: state.list.map((el) =>
            el.id===payload.id ? {...el,...payload.editprod} : el )
         
          };
          
          case ADDPROD:
            return{
              ...state,list:[payload,...state.list]
            }

            case DELETEPROD:
      return {
        ...state,
        list: state.list.filter((prod) => prod.id !== payload),
      };
         

    default:
      return state;
  }
};


