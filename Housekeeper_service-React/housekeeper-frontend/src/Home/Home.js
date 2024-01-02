import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Home.css";

const Navbar = () => {
  const [studentDropdown, setStudentDropdown] = useState(false);
  const [adminDropdown, setAdminDropdown] = useState(false);
  return (
    <div className="box">
      {/* Navbar starts */}
      <nav className="Navbar">
        <ul>
          <li>Home</li>
         
          <li
            onMouseEnter={() => setStudentDropdown(true)}
            onMouseLeave={() => setStudentDropdown(false)}
          >
            Student
            {studentDropdown && (
              <ul className="dropdown">
                <li>
                  <Link to="/Userregistration">Registration</Link>
                </li>
                <li>
                  <Link to="/Userlogin">Login</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => setAdminDropdown(true)}
            onMouseLeave={() => setAdminDropdown(false)}
          >
            Admin
            {adminDropdown && (
              <ul className="dropdown">
                <ul className="dropdown">
                  <li>
                    <Link to="/Adminregistration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/Adminlogin">Login</Link>
                  </li>
                </ul>
              </ul>
            )}
          </li>
          {/* "About" link */}
          <li>
            <Link
              to="/About"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Navbar Ends */}

      {/* Hero section starts */}
      <div className="hero">
        <div className="hero">
          <h4 id="house">House cleaning</h4>
          <h4 id="let">Let Us Clean the House</h4>
          <button id="btn1">Booking Online</button>
          {/* //Hero Section ends */}
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="catergories">
      <div className="first">
        <div className="left">
          <img
            src="https://carpetserv.ancorathemes.com/wp-content/uploads/2017/02/Welcome.png"
            alt=""
            style={{ width: "800px", height: "400px" }}
          />
        </div>
        <div className="right">
          <h4 style={{ textAlign: "left" }}>Welcome!</h4>
          <h2 style={{ color: "#1b685f", fontWeight: "bold", fontSize: "100" }}>
            Professional Cleaning
          </h2>
          <p>
            Regular vacuuming and stain-removal products can help, but they
            simply can’t match the cleaning power of professional carpet
            cleaning. CarpetServ can help remove the evidence of everyday living
          </p>
          <button id="com">Commercial</button>
          <button id="res">Residential</button>
        </div>
      </div>
    </div>
  );
};

const Dog = () => {
  return (
    <div className="dog">
      <h1>Is Your Source </h1>
      <h1>For Expert </h1>
      <h1>Carpet</h1>

      <p>We guarantee satisfaction. Just call us within 30 days of service </p>
      <p>and we'll return to your home to remedy the problem</p>
    </div>
  );
};

const Plan = () => {
  return (
    <div className="plans">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/7f7a/0d04/500c0d2071fb6c68535c72c66924c095?Expires=1704067200&Signature=hhQtff4y~GyBzM4w~1nlpHNLfmv4agLvR5iSaTkGdtZ~4mllWUTXRzokcxqLE6r4soCfUiCTqYgPYPz0gy1naKJPphmotwGIxidxhg85-CZ0jx-Pk4eQK6z6Vsqt0j0IWwv~aYgNoEibPYwOmnKBxBYEdu7rg0QkYe-l35Ec~yEU704bkVx~6x7E-xckL7sFsEgFLN54ImpxS1MiTqXaxNGvJ-5JbLPDjn-2Ho~4vHPKxSO-6m7oQptOxyaWuT~0UzRen2Ab5jwWtr97cPxi1i9-vgkP64HA~NYXLHm7l98uZOvTE433LpBEwh7z677a6J3iAdMmrpEeRfEiYw7DrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top"
                alt="..."
              />

              <div className="card-body" style={{ backgroundColor: "#E5F6F5" }}>
                <p className="card-text">
                  Cleaning of all carpet types with the use of chemicals.
                </p>
                <button className="order">Order</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ width: "18rem", position: "relative", bottom: "18px" }}
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/e909/bd2f/74eb7641b35a7e29ffd0b486d98fe08e?Expires=1704067200&Signature=BN2uxm1bB1AQd88HFGXx1he7PoRH0q8rNE3hfTb8NxKegYacQkWpkpq2TTfWBLi9vLkn4E6uYhdc83~84HZ-IcMEKaw~~3bPi3NH-Y13DLWHTq9~YFwFR6Uupi0BkdWfDDlfMpDveLydYt1GBDkSf2kizgOEiQ7NIGqnkyK9VH78u0FlbIEquo1s9LMsVUOzbw7-r9RfG3NCZToCOV3N56YIMisZ9vhozckt0uGy426E5vmETAqpXvsCkg8-93Fjt-1Szq4yI1aCBalPaTPk1UFGqoQYcG1S4ZIOdE4-solMVV8A65UJTe1Rh-vBGXrg6VT67xZeP~PbginL93~txw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Set of services: cleaning, stain removal and color repair.
                </p>
                <button className="order">Order</button>
              </div>
            </div>{" "}
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/c1bf/d532/a8e6c07ce2054375716ed7d161003b01?Expires=1704067200&Signature=UcAsqye1EbfRRJhaAaxXMdnzpUJT6D6cSi3FjpbdLS3TYGdTmdIK-S9yqOAv5BLRqGdZ~U3GMDM2nq~-NUbWuZlsZiut72B8V7PojRdulJSXQy1dCOY7YVwcxnGS2RKMfmPq-50nor8aqzRvFHHcujn9wNB8yVqoQxAAiIAEX2jdCJaQxOGpjWa6NaNwp2HX1OXNppn91~EEAtXiYysSSFcdKvyckReVaLGPKdaTsB88Cnou4Ds9TNyr1cWntyjnxHpGqV1WGjMTIzWq7HmncTL1~KMZCB9v8EPuHX69fI6TigGZXu~lqLgg4X6MNG5FJXXMcvhauXM9BMEMmQ8geQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Cleaning of all carpet types with the use of chemicals.
                </p>
                <button className="order">Order</button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="foot">
      <div className="container">
        <div className="footer">
          <div className="f1">
            <img src="" alt="" />
            <p>With over 10 years of experience in the </p>
            <p>cleaning industry our reputation has grown and grown.</p>

            <p> And we owe it all to you, our clients.</p>
          </div>
          <div className="quick">
            <h5>Quick Links</h5>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contacts</li>
          </div>
          <div className="service">
            <h5>Service</h5>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Premium</li>
            <li>Our Process</li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Dog />
      <Plan />
      <Footer />
    </div>
  );
}
