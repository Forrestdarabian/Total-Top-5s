import React, { useEffect, useState } from "react";
import axiosWitAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { updateList } from "../store/actions/actions";
import { NavLink } from "react-router-dom";
import logo from "../icons/hammer.svg";

const EditList = (props) => {
  console.log(props);

  let initialState = {
    category: "",
    subcategory: "",
    nameFive: "",
    descriptionFive: "",
    nameFour: "",
    descriptionFour: "",
    nameThree: "",
    descriptionThree: "",
    nameTwo: "",
    descriptionTwo: "",
    name: "",
    description: "",
  };

  const [editing, setEditing] = useState(initialState);
  console.log(editing);

  const handleChanges = (e) => {
    setEditing({ ...editing, [e.target.name]: e.target.value });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    // const id = props.itemData.id;
    props.updateList(editing, id);
    props.history.push(`/posted-list`);
    console.log(id);
  };

  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <form id="clear-input">
          <h1>Edit a Top 5 List</h1>
          <h3>
            If you made a mistake or simply want to edit your list, you've come
            to the right place!
          </h3>
          <div className="form-group">
            <label>Pick a Category: </label>
            <select
              className="form-control"
              id="category"
              type="text"
              name="category"
              placeholder="Pick a Category"
              value={editing.category}
              onChange={handleChanges}
              required
            >
              {/* {Object.keys(CategoryMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })} */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Subcategory: </label>
            <select
              className="form-control"
              id="subcategory"
              type="text"
              name="subcategory"
              placeholder="Choose a Subcategory"
              value={editing.subcategory}
              onChange={handleChanges}
              required
            >
              {/* {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })} */}

              {/* <option value="Music">1980's - 1990's</option>
                <option value="Music">2000's</option>
                <option value="Music">2010's</option>
                <option value="T.V. Shows">Drama</option>
                <option value="T.V. Shows">Comedy</option>
                <option value="Video Games">2000's</option> */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>5th Pick: </label>
            <input
              className="form-control"
              id="nameFive"
              type="text"
              name="nameFive"
              maxLength={50}
              placeholder="Name"
              value={editing.nameFive}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionFive"
              type="text"
              name="descriptionFive"
              maxLength={200}
              placeholder="Description"
              value={editing.descriptionFive}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>4th Pick: </label>
            <input
              className="form-control"
              id="nameFour"
              type="text"
              name="nameFour"
              maxLength={50}
              placeholder="Name"
              value={editing.nameFour}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionFour"
              type="text"
              name="descriptionFour"
              maxLength={200}
              placeholder="Description"
              value={editing.descriptionFour}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>3rd Pick: </label>
            <input
              className="form-control"
              id="nameThree"
              type="text"
              name="nameThree"
              maxLength={50}
              placeholder="Name"
              value={editing.nameThree}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionThree"
              type="text"
              name="descriptionThree"
              maxLength={200}
              placeholder="Description"
              value={editing.descriptionThree}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>2nd Pick: </label>
            <input
              className="form-control"
              id="nameTwo"
              type="text"
              name="nameTwo"
              maxLength={50}
              placeholder="Name"
              value={editing.nameTwo}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionTwo"
              type="text"
              name="descriptionTwo"
              maxLength={200}
              placeholder="Description"
              value={editing.descriptionTwo}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>1st Pick: </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              maxLength={50}
              placeholder="Name"
              value={editing.name}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="description"
              type="text"
              name="description"
              maxLength={200}
              placeholder="Description"
              value={editing.description}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <button type="primary" onClick={(e) => saveEdit(e)} className="home">
            {" "}
            Update List
          </button>
          <br />
          <br />
        </form>
        <br />
        <div className="second-nav-container">
          <NavLink to="/home">
            <button className="home">Home</button>
          </NavLink>
        </div>

        <br />
        <br />
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <br />
      </div>
      <footer class="footer pt-80 pt-xs-60">
        <div class="footer-container">
          <h1>Total Top 5's</h1>
          <div class="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smalllikeart"
              title="smalllikeart"
            >
              smalllikeart
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div class="left">
            <h4 class="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i class="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i class="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>{" "}
      <br />
      <br />
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemData: state.itemData,
    username: state.username,
    changed: state.changed,
  };
};
export default connect(mapStateToProps, { updateList })(EditList);