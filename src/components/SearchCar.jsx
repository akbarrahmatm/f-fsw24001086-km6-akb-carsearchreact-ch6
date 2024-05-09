import { useState } from "react";
import { getAllCars } from "../utils/httpRequest";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import FormatPrice from "../utils/formatPrice";

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

    console.log(filterForm);
  };

  async function fetchData(data) {
    setIsFetching(true);
    try {
      const response = await getAllCars(data);

      console.log(response);

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
            {/* Filter Search */}
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
                      Jumlah Penumpang (optional)
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
          {isFetching === true && (
            <div
              style={{
                height: "20vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              className="text-center"
            >
              <div className="spinner-border text-success mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Fetching Cars Data ...</p>
            </div>
          )}

          {!isFetching && cars.length === 0 && (
            <div className="card text-center border-0 shadow mt-5">
              <div className="card-body">No Cars Found.</div>
            </div>
          )}

          <div className="row" id="cars-container">
            {isFetching === false &&
              cars.length > 0 &&
              cars.map((car) => (
                <div className="col-lg-4" key={car.id}>
                  <div className="card cars-card">
                    <img
                      src={car.image.slice(1)}
                      className="card-img-top cars-thumbnail"
                    />
                    <div className="card-body">
                      <h5 className="card-title cars-type">
                        {car.manufacture} {car.model} / {car.type}
                      </h5>
                      <h5 className="card-title cars-price">
                        Rp. {FormatPrice(car.rentPerDay)} / hari
                      </h5>
                      <p className="cars-description">{car.description}</p>
                      <div className="row cars-passenger">
                        <div className="col-1 cars-item-icon">
                          <img src="/images/fi_users1.png" alt="" />
                        </div>
                        <div className="col-10 cars-item-description">
                          {car.capacity} orang
                        </div>
                      </div>
                      <div className="row cars-transmission">
                        <div className="col-1 cars-item-icon">
                          <img src="/images/fi_settings.png" alt="" />
                        </div>
                        <div className="col-10 cars-item-description">
                          {car.transmission}
                        </div>
                      </div>
                      <div className="row cars-year">
                        <div className="col-1 cars-item-icon">
                          <img src="/images/fi_calendar.png" alt="" />
                        </div>
                        <div className="col-10 cars-item-description">
                          Tahun {car.year}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="btn btn-success-custom"
                        style={{ width: "100%" }}
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
