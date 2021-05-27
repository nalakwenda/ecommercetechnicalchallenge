import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Image from "../Assets/img/background.png";

const Banner = () => {
  return (
    <>
      <MDBContainer className="col-md-8  mt-3">
        <MDBRow>
          <MDBCol>
            <img src={Image} style={{ width: "20rem", maxHeight: "17rem" }} />
          </MDBCol>
          <MDBCol style={{ backgroundColor: "#FFEBEE" }}>
            <h3 className=" mt-5">
              For the Love of Fashion, Glam and Technology
            </h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Banner;
