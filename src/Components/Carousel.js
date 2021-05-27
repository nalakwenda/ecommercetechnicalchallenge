import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

const Carousel = () => {
  return (
    <MDBCarousel
      className="h-10
    "
      showControls
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg"
            alt="..."
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg"
            alt="..."
          />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};
export default Carousel;
