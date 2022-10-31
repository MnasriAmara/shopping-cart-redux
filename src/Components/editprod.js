import React, { useEffect, useState } from "react";
import "./addproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { editprod, details } from "../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";

function EditProd() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(details(id));
  }, [id, dispatch]);

  const navigate = useNavigate();
  const el = useSelector((state) => state.detailsprod);

  useEffect(() => {
    setoldProd(el);
  }, [el]);

  const [oldProd, setoldProd] = useState({
    image: "",
    rate: "",
    name: "",
    price: "",
    desc: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(editprod(el.id, { ...oldProd, id: Math.random() }));

    setoldProd({ image: "", name: "", price: "", desc: "", rate: "" });
    navigate("/");
  };

  const handelchange = (e) => {
    setoldProd({ ...oldProd, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form id="contact" action="" method="post" onSubmit={handelSubmit}>
        <h3>Edit Product</h3>

        <fieldset>
          <input
            type="text"
            tabIndex="1"
            placeholder=""
            onChange={handelchange}
            value={oldProd.name}
            name="name"
          />
        </fieldset>
        <fieldset>
          <input
            onChange={handelchange}
            value={oldProd.img}
            name="img"
            type="url"
            tabIndex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            onChange={handelchange}
            value={oldProd.category}
            name="category"
            type="text"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            onChange={handelchange}
            value={oldProd.rate}
            name="rate"
            type="number"
            tabIndex="4"
            required
          />
        </fieldset>
        <fieldset>
          <input
            onChange={handelchange}
            value={oldProd.price}
            name="price"
            type="text"
            tabIndex="4"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            onChange={handelchange}
            value={oldProd.description}
            name="description"
            type="text"
            tabIndex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset className="btnsubmit">
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default EditProd;
