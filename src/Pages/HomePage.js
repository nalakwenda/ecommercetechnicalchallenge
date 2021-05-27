import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	MDBNavbar,
	MDBContainer,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBDropdownLink,
	MDBCollapse,
	MDBBtn,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBSpinner,
} from "mdb-react-ui-kit";
import axios from "axios";

import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";

const Homepage = () => {
	const [products, setProducts] = useState([]);
	const [currency, setCurrency] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showNavColor, setShowNavColor] = useState(false);
	const [showNavColorSecond, setShowNavColorSecond] = useState(false);
	const [showNavColorThird, setShowNavColorThird] = useState(false);
	const [showBasic, setShowBasic] = useState(false);
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products?limit=10")
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
			<NavBar /> <Banner />
			<div className="col-md-8 container">
				<div className="mt-5 container">
					<MDBRow className="row-cols-3 ">
						{products.map((products) => (
							<MDBCol>
								<MDBCard
									className="mb-5 shadow-3-strong"
									style={{ maxWidth: "18rem" }}
								>
									<Link
										to={{
											pathname: "/Product/" + products.id + "/",
											state: { products },
										}}
									>
										<MDBCardImage
											style={{ maxHeight: "22rem" }}
											src={products.image}
											position="top"
											alt="Product Image"
										/>
										<MDBCardBody>
											<MDBCardTitle>
												<b>
													<p>{products.title}</p>
												</b>
											</MDBCardTitle>
											<MDBCardText>
												<p>${products.price}</p>
											</MDBCardText>
										</MDBCardBody>
									</Link>
								</MDBCard>
							</MDBCol>
						))}
					</MDBRow>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Homepage;
