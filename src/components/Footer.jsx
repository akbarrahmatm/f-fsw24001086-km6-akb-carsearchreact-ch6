export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <footer className="row">
            <div className="col-lg-3 footer-item address">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-lg-3 footer-item">
              <ul className="nav-footer">
                <li>
                  <a href={"#our-service"}>Our Services</a>
                </li>
                <li>
                  <a href={"#why-us"}>Why Us</a>
                </li>
                <li>
                  <a href={"#testimonial"}>Testimonial</a>
                </li>
                <li>
                  <a href={"#faq"}>FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-item socmed">
              <p>Connect with us</p>
              <ul className="list-socmed">
                <li>
                  <a href={"#"}>
                    <img
                      src="/assets/img/svg/icon_facebook.svg"
                      alt="Icon Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <img
                      src="/assets/img/svg/icon_instagram.svg"
                      alt="Icon Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <img
                      src="/assets/img/svg/icon_twitter.svg"
                      alt="Icon Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <img src="/assets/img/svg/icon_mail.svg" alt="Icon Mail" />
                  </a>
                </li>
                <li>
                  <a href={"#"}>
                    <img
                      src="/assets/img/svg/icon_twitch.svg"
                      alt="Icon Twitch"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-item copyright">
              <p>Copyright Binar 2022</p>
              <img src="/assets/img/svg/logo.svg" alt="Logo Binar Rental Car" />
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
