export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="navigation">
          <nav
            className="navbar fixed-top navbar-expand-md"
            aria-label="Offcanvas navbar large"
          >
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  src="/assets/img/svg/logo.svg"
                  alt="Bootstrap"
                  width={100}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                    BCR
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-black"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link" href="#our-service">
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#why-us">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faq">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-success-custom btn-register"
                        href="#"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-content container">
          <div className="row">
            <div className="col-lg-6 m-auto hero-text">
              <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a className="btn btn-success-custom" href="/cars">
                Mulai Sewa Mobil
              </a>
            </div>
            <div className="col-lg-6">
              <img
                className="img-car"
                src="/assets/img/img_car.png"
                alt="Image Car"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
