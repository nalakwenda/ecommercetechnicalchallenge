import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="text-center  mt-5 ">
      <div className="text-center p-3" style={{ backgroundColor: "WHITE" }}>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="/">
          La Magasine
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
