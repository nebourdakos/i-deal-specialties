import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

import lorie from "../assets/images/lorie.jpg";
import foodbank from "../assets/images/foodbank.jpg";
import collage from "../assets/images/collage.png";
// import container from "../assets/images/container.png";
// import sandwich from "../assets/images/sandwich.jpg";
// import turkey from "../assets/images/turkey.jpg";
// import cupcake from "../assets/images/cupcake.jpeg";
// import ham from "../assets/images/Ham.jpeg";
// import chicken from "../assets/images/chicken.jpeg";
// import pic02 from "../assets/images/pic02.jpg";
// import pic03 from "../assets/images/pic03.jpg";
// import pic04 from "../assets/images/pic04.jpg";
// import mask from "../assets/images/mask.png";
// import cutlery from "../assets/images/cutlery.png";
// import Carousel, {
//   autoplayPlugin,
//   slidesToShowPlugin
// } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homepage() {
  const siteTitle = "Gatsby Starter - Photon";

  return (
    <Layout>
      <Helmet title={siteTitle} />

      <section id="one" className="main style1">
        <div className="grid-wrapper">
          <div className="col-6">
            <header className="major">
              <h2>
                I Deal Specialties
                <br />
              </h2>
            </header>
            <p>
              I Deal Specialties is an expert food broker offering a wide range
              of food and related items selected to meet the needs of high
              volume meal providers including prisons, foodbanks and other
              institutional settings. Superior Value, Quality and Customer
              Service define I Deal Specialties and make us an outstanding
              partner to provide the items you need at value pricing to meet
              your challenging food service demands.
            </p>
          </div>
          <div className="col-6">
            <div style={{ textAlign: "center", maxWidth: "500px" }}>
              <span className="image fit">
                <img src={foodbank} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="one" className="main style1">
        <div className="grid-wrapper">
          <div className="col-4">
            <div style={{ textAlign: "center" }}>
              <span className="image">
                <img style={{ maxWidth: "300px" }} src={lorie} alt="" />
              </span>
            </div>
          </div>
          <div className="col-8">
            <header className="major">
              <h2>
                Solutions To Help Make Your Job Easier
                <br />
              </h2>
            </header>
            <p>
              The I Deal Specialties team is led by Lorie Gelb, President. Lorie
              has more than 30 years of experience in the wholesale food service
              business, having been a senior manager and owner of a successful
              family owned independent food service purveyor in Ohio. With
              Lorie’s broad knowledge of food products, industry suppliers and
              the food service distribution chain I Deal Specialties is
              continuously searching for opportunity-buys that combine
              best-in-class quality products with superior value. Leveraging I
              Deal Specialties close collaboration with leading national brand
              food suppliers provides access to their over-run and out-of-spec
              top quality products at reduced prices. Whether you need a pallet
              or a truckload of product, we can help!
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="main style2">
        <div className="grid-wrapper">
          <div className="col-12">
            <div style={{ textAlign: "center" }}>
              <header className="major">
                <h2>
                  I Deal Specialties has or can find what you need!
                  <br />
                </h2>
                <h2>
                  Let us look for you!
                  <br />
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div className="grid-wrapper">
          <div className="col-4">
            <div style={{ textAlign: "center" }}>
              <span className="image">
                <img style={{ maxWidth: "300px" }} src={collage} alt="" />
              </span>
            </div>
          </div>
          {/* <div className="col-3">
            <ul className="image fit">
              <p>
                <span>
                  <img src={sandwich} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={container} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={cupcake} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={cutlery} alt="" />
                </span>
              </p>
            </ul>
          </div> */}
          {/* <div className="col-3">
            <ul className="image fit">
              <p>
                <span>
                  <img src={turkey} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={chicken} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={mask} alt="" />
                </span>
              </p>
              <p>
                <span>
                  <img src={ham} alt="" />
                </span>
              </p>
            </ul>
          </div> */}
          <div className="col-4">
            <p>
              <div style={{ alignContent: "center", marginTop: "50px" }}>
                <ul>
                  <li>Chicken - breaded and unbreaded, fillets and nuggets</li>
                  <li>Chicken wings</li>
                  <li>Turkey – whole, sliced and ground</li>
                  <li>Hams</li>
                  <li>Breaded Fish-Pollack and Cod</li>
                  <li>Tuna – in cans or pouches</li>
                  <li>Eggs – scrambled and liquid</li>
                  <li>Potatoes-frozen and refrigerated</li>
                  <li>Mixed Vegetables & Fruits- bulk and retail pack</li>
                </ul>
              </div>
            </p>
          </div>
          <div className="col-4">
            <div style={{ alignContent: "center", marginTop: "50px" }}>
              <ul>
                <li>Pre-made sandwiches</li>
                <li>Deserts - Cakes, Pies and Cookies</li>
                <li>Ice creams & sorbet – individual and multi-gallon</li>
                <li>Snack foods</li>
                <li>Cereals</li>

                <li>Hinged containers</li>
                <li>Paper and plastic bags</li>
                <li>Disposable utensils</li>
                <li>Condiments</li>
                <li>Toilet Paper & Paper Towels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Testimonials:</h2>
            </header>
            <p>Read What Our Customers Have To Say</p>
          </div>

          <div className="col-3">
            {/* <span className="image fit">
              <img src={pic02} alt="" />
            </span> */}
            <h3>Everyone loved the chicken!</h3>
            <p>John Doe</p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-3">
            {/* <span className="image fit">
              <img src={pic03} alt="" />
            </span> */}
            <h3>
              Fast delivery and they tracked it every step of the way to keep me
              informed
            </h3>
            <p>John Doe</p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-3">
            {/* <span className="image fit">
              <img src={pic04} alt="" />
            </span> */}
            <h3>Found exactly what I needed and at a great price</h3>
            <p>John Doe</p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul> */}
          </div>
          <div className="col-3">
            {/* <span className="image fit">
              <img src={pic04} alt="" />
            </span> */}
            <h3>Thank you for the wonderful customer service</h3>
            <p>John Doe</p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  More
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Contact Us Today!</h2>
            </header>
            <p>
              Phone and E-mail messages are monitored nights and weekends for
              quick response.
              <p>Call when you need something!</p>
            </p>
          </div>
          <div className="col-6">
            <h3>Address</h3>
            <p>
              I Deal Specialties, Inc.
              <p>
                2493 Cedarwood Rd<p>Pepper Pike, OH 44124</p>
              </p>
            </p>
          </div>
          <div className="col-6">
            <h3>Customer Support</h3>
            <p>
              Phone: 216-789-9009
              <p>
                Fax: 440-461-2883<p>Email: lorie@idealspecialties.net</p>
              </p>
            </p>
          </div>
          {/* <ul className="actions uniform">
            <li>
              <a href="#" className="button special">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </Layout>
  );
}

export default Homepage;
