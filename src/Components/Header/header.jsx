import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./header_responsive.css";

function Header() {
  let person;
  const [pop, setPop] = useState(false);
  const [price, setPrice] = useState(1);

  function menuClick() {
    document.querySelector("#links_id").classList.toggle("show");
    document.querySelector(".fa-bars").style.display = "none";
    document.querySelector(".fa-xmark").style.display = "block";
  }
  function menuClickx() {
    document.querySelector("#links_id").classList.toggle("show");
    document.querySelector(".fa-bars").style.display = "block";
    document.querySelector(".fa-xmark").style.display = "none";
  }
  return (
    <>
      <div id="header">
        <div className="navigation-bar">
          <div className="nav_list">
            <h2 id="logo" style={{ marginRight: pop ? "71.8vw" : "0" }}>
              Travalo<i className="fa-solid fa-plane-departure"></i>
            </h2>
            <i className="fa-solid fa-bars _repo_icons" onClick={menuClick} ></i>
            <i
              className="fa-solid fa-xmark _repo_icons"
              onClick={menuClickx}
            ></i>
          </div>
          <div
            className="links"
            id="links_id"
            style={{ display: pop ? "none" : "block" }}
          >
            <Link to={"/"} className="nav-links">
              HOME
            </Link>
            <Link to={"/about"} className="nav-links">
              ABOUT
            </Link>
            <Link to={"/blogs"} className="nav-links">
              BLOG
              </Link>
            <Link to={"/contact"} className="nav-links">
              CONTACT
            </Link>
            <button id="bt1_header" onClick={() => setPop(true)}>
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="banner_text_para">
          <h1 id="banner-text">
            TRAVELLING AROUND <br /> INDIA
          </h1>{" "}
          <br />
          <br />
          <p id="banner-para">
            Traveling is one of life greatest joys, offering the chance to
            explore new cultures, savor exotic cuisines, and immerse yourself in
            unfamiliar landscapes. Whether you seek adventure, relaxation, or a
            deeper connection with the world, our travel agency is here to guide
            you.We provide personalized travel planning and curated experiences
            tailored to your interests, ensuring every aspect of your trip is
            smooth and enjoyable. With our expertise, you can focus on soaking
            in the beauty and wonder of your journey, knowing that all the
            details are taken care of. Let us help you create memories that will
            last a lifetime.
          </p>
          {/* <button >
            Read More
          </button> */}
          <button
            className="bt-t1"
            id="bt2"
            onClick={() => setPop(true)}
            style={{ display: pop ? "none" : "block" }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      {/* <div className="form_parent" style={{ display: pop ? "block" : "none" }}> */}
        <form id="booking-main" style={{ display: pop ? "block" : "none" }}>
          <div className="cross" onClick={() => setPop(false)}>
            X
          </div>
          <div className="inputs">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="people">No of people :</label>
            <input
              type="number"
              name="people"
              id="people"
              value={person}
              min={1}
              max={10}
              placeholder="Enter number of people"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="city">Destination :</label>
            <select name="city" id="city" required>
              <option value="default">Select destination</option>
              <option value="Goa">Goa</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshdweep">Lakshdweep</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Udaipur">Udaipur</option>
              <option value="Varanasi">Varanasi</option>
            </select>
          </div>
          <button id="bt1_popup" >Book now</button>
        </form>
      {/* </div> */}
    </>
  );
}

export default Header;
