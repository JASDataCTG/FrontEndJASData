import team1 from "../../../assets/images/team/team-1.jpg";
import team2 from "../../../assets/images/team/team-2.jpg";
import team3 from "../../../assets/images/team/team-3.jpg";

// eslint-disable-next-line


export const Team = () => {
  return (
    <div className="p-5">
      <section id="team" className="team">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-header">
            <h2>Nuestro equipo de trabajo</h2>
            <p>
              Architecto nobis eos vel nam quidem vitae temporibus voluptates
              qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur
              dolores incidunt enim voluptatem magnam cumque fuga.
            </p>
          </div>

          <div className="row gy-5">
            <div
              className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team1}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>Ing. Jairo Acosta Solano</h4>
                  <span>Chief Executive Officer</span>
                  <span>Data Scientist</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            <div
              className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team2}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>Ing. Stephanie Acosta Sierra</h4>
                  <span>Developer</span>
                  <span>System Enginner</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            <div
              className="col-xl-4 col-md-6 d-flex aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={team3}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
    </div>
  );
};
