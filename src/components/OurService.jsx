export default function OurService() {
  return (
    <>
      <section className="our-service " id="our-service">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <img
                className="img-service "
                src="./assets/img/img_service.png"
                alt="Image Service"
              />
            </div>
            <div className="col-lg-6 m-auto our-service-text">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="service-item">
                <li>
                  <span className="icon-service-item">
                    <img
                      src="./assets/img/svg/check-circle-blue.svg"
                      alt="Check"
                    />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li>
                  <span className="icon-service-item">
                    <img
                      src="./assets/img/svg/check-circle-blue.svg"
                      alt="Check"
                    />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li>
                  <span className="icon-service-item">
                    <img
                      src="./assets/img/svg/check-circle-blue.svg"
                      alt="Check"
                    />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li>
                  <span className="icon-service-item">
                    <img
                      src="./assets/img/svg/check-circle-blue.svg"
                      alt="Check"
                    />
                  </span>
                  Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li>
                  <span className="icon-service-item">
                    <img
                      src="./assets/img/svg/check-circle-blue.svg"
                      alt="Check"
                    />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
