import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserModal from "../modal"; 
import "./cars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentCar, setCurrentCar] = useState(null);

  const openModal = () => {
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
    setIsEditing(false);
    setCurrentCar(null);
  };

  const addCar = (car) => {
    setCars([...cars, car]);
  };

  const deleteCar = (id) => {
    const newCars = cars.filter((car) => car.id !== id);
    setCars(newCars);
  };

  return (
    <>
      <UserModal
        open={modal}
        toggle={toggle}
        addCar={addCar}
        currentCar={currentCar}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button create-react-app my-appon className="btn btn-success" onClick={openModal}>
                  add Car
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}$</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>{item.brand}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-primary"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteCar(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className="btn btn-info">
                          <NavLink to="/single-car">
                             <span>
                               <i class="fa-solid fa-eye"></i>
                             </span>
                           </NavLink>
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cars;
