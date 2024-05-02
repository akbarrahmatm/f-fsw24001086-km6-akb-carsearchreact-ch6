export default function WhyUs() {
  return (
    <>
      <section className="why-us" id="why-us">
        <div className="container">
          <h2 className="sub-title">Why Us?</h2>
          <p className="description">Mengapa harus pilih Binar Car Rental?</p>
          <div className="row">
            <div className="item-why-us col-lg-3 col-md-6 col-sm-12 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-image"
                    src="./assets/img/svg/thumbs-up-yellow.svg"
                    alt="Icon Thumbs Up"
                  />
                  <p className="card-title-text">Mobil Lengkap</p>
                  <p className="card-content-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="item-why-us col-lg-3 col-md-6 col-sm-12 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-image"
                    src="./assets/img/svg/price.svg"
                    alt="Icon Price"
                  />
                  <p className="card-title-text">Harga Murah</p>
                  <p className="card-content-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="item-why-us col-lg-3 col-md-6 col-sm-12 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-image"
                    src="./assets/img/svg/clock.svg"
                    alt="Icon Clock"
                  />
                  <p className="card-title-text">Layanan 24 Jam</p>
                  <p className="card-content-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="item-why-us col-lg-3 col-md-6 col-sm-12 d-flex align-items-strech">
              <div className="card">
                <div className="card-body">
                  <img
                    className="card-image"
                    src="./assets/img/svg/professional.svg"
                    alt="Icon Profesional"
                  />
                  <p className="card-title-text">Sopir Profesional</p>
                  <p className="card-content-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
