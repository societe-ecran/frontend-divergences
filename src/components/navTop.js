import React from "react";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import { Link } from "gatsby";
import "../images/panier.png";
import Panier from "./panier";
import { Container, Row, Col } from "reactstrap";

const NavTop = () => {
    let edition = "éditions divergences";

    return (
        <div class="nav bg-white sticky-top ">
            <Col sm="6">
                <Link
                    className="text-dark font-weight-bold logoDivergences  ml-2  pt-5 navfont"
                    style={{ textDecoration: "none" }}
                    activeStyle={{ textDecoration: "none" }}
                    to="/"
                >
                    {edition.toUpperCase()}
                </Link>
            </Col>

            <Col sm="4">
                <li class="navFont pt-2">
                    <Link
                        className=" text-dark navFont logoDivergences2"
                        style={{ textDecoration: "none" }}
                        activeStyle={{ textDecoration: "none" }}
                        to="/"
                    >
                        critique sociale et politique
                    </Link>
                </li>
            </Col>

            <Col sm="2" className="d-flex justify-content-end">
                <li className=" pt-1">
                    <button className="snipcart-checkout panier">
                        <Panier />
                    </button>
                </li>
            </Col>
        </div>
    );
};

export default NavTop;
