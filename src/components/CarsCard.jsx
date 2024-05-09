import FormatPrice from "../utils/formatPrice";

export default function CarsCard({ data, isLoading }) {
  return (
    <>
      {isLoading === true && (
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

      {!isLoading && data.length === 0 && (
        <div className="card text-center border-0 shadow mt-5">
          <div className="card-body">No Cars Found.</div>
        </div>
      )}

      <div className="row" id="cars-container">
        {data &&
          data.length > 0 &&
          data.map((car) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 d-flex align-self-stretch mb-3"
              key={car.id}
            >
              <div className="card cars-card mb-3 h-100">
                <img
                  src={car.image.slice(1)}
                  className="card-img-top cars-thumbnail"
                />
                <div className="card-body d-flex flex-column">
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
                  <div className="mt-auto">
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
            </div>
          ))}
      </div>
    </>
  );
}
