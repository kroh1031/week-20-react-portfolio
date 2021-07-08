import recipeFinderCard from "../../media/recipe-finder-card.jpeg";
import tshirtImage from "../../media/t-shirt.jpeg";
import weatherDashboardCard from "../../media/weather-dashboard-card.jpeg";
import techBlogImage from "../../media/tech-blog.jpeg";
import workoutTrackerImage from "../../media/workout-tracker.png";
import workdaySchedulerImage from "../../media/workday-scheduler.jpeg";

const Portfolio = () => {
  //   ### Projects

  // For each project that is featured in your portfolio, include the following:

  // - An image of the deployed application (either a short animated GIF or screenshot)

  // - The title of the project

  // - A link to the deployed application

  // - A link to the corresponding GitHub repository
  return (
    <div className="container">
      <section class="row mt-3">
        <div>
          <h1>Portfolio</h1>
        </div>
      </section>
      <div className="row mb-3">
        {/* // <!-- Tech Blog Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={techBlogImage}
              class="card-img-top project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Tech Blog</h5>
              <a
                href="https://tech-blog-app14.herokuapp.com/"
                target="“_blank”"
                class="card-text"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/week-14-tech-blog"
                target="“_blank”"
                class="card-text"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
            </div>
          </div>
        </div>
        {/* <!-- Workout Tracker Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={workoutTrackerImage}
              class="card-img-top img-responsive project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Workout Tracker</h5>
              <a
                href="https://workout-tracker-188.herokuapp.com/"
                target="“_blank”"
                className="card-text"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/week-18-workout-tracker"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
            </div>
          </div>
        </div>
        {/* <!-- Work Day Scheduler Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={workdaySchedulerImage}
              className="card-img-top img-responsive project-image"
              alt="..."
              height="350"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Work Day Scheduler</h5>
              <a
                href="https://kroh1031.github.io/week-05-work-day-scheduler/"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the deployed version{" "}
              </a>
              <br />
              <a
                href="https://github.com/kroh1031/week-05-work-day-scheduler"
                target="“_blank”"
                className="card-text no-underline"
              >
                Link to the GitHub repository{" "}
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="row mb-3">
        <div className="col">
          <div className="card h-100">
            <img
              src={recipeFinderCard}
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
            </div>
          </div>
        </div>
        {/* <!-- Design Collaboration Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={tshirtImage}
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
            </div>
          </div>
        </div>
        {/* <!-- Weather Dashboard Card --> */}
        <div className="col">
          <div className="card h-100">
            <img
              src={weatherDashboardCard}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
