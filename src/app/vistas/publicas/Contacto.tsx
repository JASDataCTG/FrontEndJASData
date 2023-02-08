

export const Contacto = () => {
  return (
    <div className="p-5">
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contáctenos</h2>
            <p>
              Estamos disponibles para atender todas sus solicitudes y concertar una cita para conocer sus necesidades.
            </p>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8558.16249387534!2d-75.53843144882815!3d10.426754804289128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b0f694c19d794b5!2sConjunto%20Residencial%20Seguros%20Tequendama!5e0!3m2!1ses-419!2sco!4v1672418437825!5m2!1ses-419!2sco"
            allowFullScreen={true}
          ></iframe>
        </div>
        {/* End Google Maps --> */}

        <div className="container-fluid">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-12">
              <div className="info">
                <h3>Datos de contacto</h3>
                <p>
                  
                </p>

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Dirección:</h4>
                    <p>Barrio Torices. Cr 17. #34-210</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>jasdatactg@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Celular:</h4>
                    <p>+57 300 5267650</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>

            {/* <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required={true}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required={true}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required={true}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required={true}
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div> */}
            {/* End Contact Form */}
          </div>
        </div>
      </section>
    </div>
  );
};
