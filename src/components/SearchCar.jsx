import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getAllCars } from "../services/car.services";

import CarsCard from "./CarsCard";

export default function SearchCar() {
  const [isFetching, setIsFetching] = useState();
  const [cars, setCars] = useState([]);
  const [filterForm, setFilterForm] = useState({
    driverType: "",
    date: "",
    time: "",
    capacity: "",
  });

  const handleInputFilter = (e) => {
    const { name, value } = e.target;
    setFilterForm({ ...filterForm, [name]: value });
  };

  const handleSearchCar = () => {
    fetchData(filterForm);
  };

  async function fetchData(data) {
    setIsFetching(true);
    try {
      const response = await getAllCars(data);

      if (response.length > 0) {
        setCars(response);
        toast.success("Cars Data Retrieved", {
          position: "bottom-left",
          autoClose: 7000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      } else {
        setCars([]);
        toast.error("Not Found", {
          position: "bottom-left",
          autoClose: 7000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: "bottom-left",
        autoClose: 7000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }
    setIsFetching(false);
  }

  return (
    <>
      <section className="search-car">
        <ToastContainer />

        <div className="container">
          <div className="card filter-card shadow">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6 my-3 col-lg-3 mb-0  m-auto">
                    <label htmlFor="driverType">Tipe Driver</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="driverType"
                      name="driverType"
                      onChange={handleInputFilter}
                    >
                      <option>
                        Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                      </option>
                      <option value={"true"}>Dengan Supir</option>
                      <option value={"false"}>Tanpa Supir (Lepas Kunci)</option>
                    </select>
                  </div>
                  <div className="col-md-6 my-3 col-lg-3 mb-0  m-auto">
                    <label htmlFor="date">Tanggal</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      id="date"
                      name="date"
                      onChange={handleInputFilter}
                    />
                  </div>
                  <div className="col-md-6 my-3 col-lg-3 mb-0  m-auto">
                    <label htmlFor="time">Pilih Waktu</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="time"
                      name="time"
                      onChange={handleInputFilter}
                    >
                      <option defaultValue={true}>
                        Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      </option>
                      <option value="08:00">08.00 WIB</option>
                      <option value="09:00">09.00 WIB</option>
                      <option value="10:00">10.00 WIB</option>
                      <option value="11:00">11.00 WIB</option>
                      <option value="12:00">12.00 WIB</option>
                    </select>
                  </div>
                  <div className="col-md-6 my-3 col-lg-3 mb-0 ">
                    <label htmlFor="capacity" className="fw-light">
                      Jumlah Penumpang
                    </label>
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control border-end-0"
                        placeholder="Jumlah Penumpang"
                        id="capacity"
                        name="capacity"
                        defaultValue={""}
                        onChange={handleInputFilter}
                      />
                      <span className="input-group-text bg-white">
                        <img src="images/fi_users.png" width="20px" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto mt-2 m-auto">
                <button
                  className="btn btn-success-search w-100 text-center"
                  id="load-btn"
                  onClick={handleSearchCar}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container cars-result">
          <CarsCard data={cars} isLoading={isFetching} />
        </div>
      </section>
    </>
  );
}
