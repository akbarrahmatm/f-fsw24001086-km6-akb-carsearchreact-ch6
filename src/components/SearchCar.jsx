import { useState } from "react";
import { useEffect } from "react";
import { getAllCars } from "../utils/httpRequest";

export default function SearchCar() {
  const [isFetching, setIsFetching] = useState(true);
  const [cars, setCars] = useState({});

  console.log(isFetching);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllCars();

        setIsFetching(false);

        setCars(response);
        console.log(cars);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, []);

  console.log(cars);

  return (
    <>
      <section className="search-car">
        <div className="container">
          <div className="card filter-card shadow">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-3 m-auto">
                    <label htmlFor="tipeDriver">Tipe Driver</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="tipeDriver"
                    >
                      <option defaultValue={"true"}>
                        Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                      </option>
                      <option value={"true"}>Dengan Supir</option>
                      <option value={"false"}>Tanpa Supir (Lepas Kunci)</option>
                    </select>
                  </div>
                  <div className="col-lg-3 m-auto">
                    <label htmlFor="tanggal">Tanggal</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      id="tanggal"
                    />
                  </div>
                  <div className="col-lg-3 m-auto">
                    <label>Pilih Waktu</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="waktuJemput"
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
                  <div className="col-lg-3">
                    <label className="fw-light">
                      Jumlah Penumpang (optional)
                    </label>
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control border-end-0"
                        placeholder="Jumlah Penumpang"
                        id="jumlahPenumpang"
                        defaultValue={0}
                      />
                      <span className="input-group-text bg-white">
                        <img src="images/fi_users.png" width="20px" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto m-auto">
                <button
                  className="btn btn-success-search text-center"
                  id="load-btn"
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
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Fetching Cars Data ...</p>
            </div>
          )}

          <div className="row" id="cars-container">
            {isFetching === false &&
              cars.map((car) => (
                <div className="col-4" key={car.id}>
                  <div className="card cars-card">
                    <img
                      src={car.image.slice(1)}
                      className="card-img-top cars-thumbnail"
                    />
                    <div className="card-body">
                      <h5 className="card-title cars-type">
                        {car.manufacture} / {car.model}
                      </h5>
                      <h5 className="card-title cars-price">
                        Rp {car.rentPerDay} / hari
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
