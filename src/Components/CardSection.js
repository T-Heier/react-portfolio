import React from "react";

function CardSection() {
  return (
    <div id="work" class="container">
      <h2>Work</h2>

      <div class="work-cards row">
        <div class="col-12 col-md-4">
          <div
            class="card text-white bg-secondary mb-3"
            style={{"width": "20rem", "height": "20rem"}}
          >
            <img
              src="./Assets/photos/Screenshot_20210516_151147.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">DaBeatz</h5>
              <p class="card-text">
                This was my second project using mySQL database. We used
                spotify's song library to search and create new playlists.
              </p>
              <a
                href="https://github.com/Murrmaid4/daBeatz"
                target="_blank"
                class="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div
              class="card text-white bg-secondary mb-3"
              style={{"width": "20rem", "height": "20rem"}}
              >
              <img
                src="./Assets/photos/Screenshot_20210413_213429.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Jaunt</h5>
                <p class="card-text">
                  This is my first project ever created within a timeframe of
                  four days with two other group mates.
                </p>
                <a
                  href="https://github.com/kevinrhidalgo/SuperGroup-ProjectOne-"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <div
                class="card text-white bg-secondary mb-3"
                style={{"width": "20rem", "height": "20rem"}}
                >
                <img
                  src="./Assets/photos/Screenshot_20210413_213304.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Password Gen</h5>
                  <p class="card-text">
                    This is a password generator I created all on my own using
                    Javascript.
                  </p>
                  <a
                    href="https://github.com/T-Heier/password-gen"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Github
                  </a>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div
                  class="card text-white bg-secondary mb-3"
                  style={{"width": "20rem", "height": "20rem"}}
                  >
                  <img
                    src="./Assets/photos/Screenshot_20210413_213338.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Coding Quiz</h5>
                    <p class="card-text">
                      This project I used Javascript to make a short simple
                      quiz!
                    </p>
                    <a
                      href="https://github.com/T-Heier/Code-quiz"
                      target="_blank"
                      class="btn btn-primary"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection