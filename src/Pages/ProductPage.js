import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id + "/")
      .then((res) => {
        setProducts(res.data);
        setLoading(true);

        //console.log(products);
        //console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  if (loading == false) {
    return (
      <MDBSpinner color="primary text-center">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }
  return (
    <>
      <NavBar />
      <div className="mt-5 mb-5 col-md-8  container">
        <MDBRow>
          <MDBCol>
            <img
              src={products.image}
              style={{ maxWidth: "18rem", maxHeight: "25rem" }}
            />
          </MDBCol>

          <MDBCol>
            <h3>
              <b>{products.title}</b>
            </h3>
            <br />
            <h4>
              <b>Description </b>
            </h4>
            <br />
            <p> {products.description}</p>
            <br />
            <h4 className="mt-3">
              <b>Price </b>
            </h4>
            <br />
            <p> $ {products.price}</p>
            <br />
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#"
            >
              Add to Cart <MDBIcon fa icon="shopping-cart" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default ProductPage;
