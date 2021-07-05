const Portfolio = () => {
  return (
    // <!-- Recipe Finder Card -->
    <div className="container">
      <section class="row mt-3">
        <div>
          <h1>Portfolio</h1>
        </div>
      </section>
      <div className="row mb-3">
        <div className="col">
          <div className="card h-100">
            <img
              src="./assets/images/recipe-finder.jpg"
              class="card-img-top project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Recipe Finder</h5>
              <a
                href="https://sranson.github.io/recipe-finder/"
                target="“_blank”"
                class="card-text"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/recipe-finder-1"
                target="“_blank”"
                class="card-text"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
              <a
                href="./assets/images/recipe-finder-screenshot.png"
                target="“_blank”"
                className="card-text"
              >
                Screenshot of the deployed application
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Design Collaboration Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src="./assets/images/t-shirt.jpg"
              class="card-img-top img-responsive project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Design Collaboration</h5>
              <a
                href="https://cohoots.herokuapp.com/"
                target="“_blank”"
                className="card-text"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/CoHoots"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
              <a
                href="./assets/images/cohoots-screenshot.png"
                target="“_blank”"
                className="card-text no-underline"
              >
                Screenshot of the deployed application
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Weather Dashboard Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src="./assets/images/weather-dashboard.jpg"
              className="card-img-top img-responsive project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Weather Dashboard</h5>
              <a
                href="https://kroh1031.github.io/week-06-weather-dashboard/"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/week-06-weather-dashboard"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
              <a
                href="./assets/images/weather-dashboard-screenshot2.png"
                target="“_blank”"
                className="card-text no-underline"
              >
                Screenshot of the deployed application
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
