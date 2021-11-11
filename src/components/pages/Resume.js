import resume from "../../media/professional-resume.pdf";
import ResumeStyle from "../../styles/Resume.css";

const Resume = () => {
  //   WHEN I am presented with the Resume section
  // THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
  return (
    <div className="container mt-3">
      <h1>Resume</h1>
      <div className="mb-2">
        Open my{" "}
        <a href={resume} target="_blank">
          resume
        </a>
      </div>
      <div>
        <h4>Front-end Proficiencies</h4>
        <ul id="unordered-list">
          <li>
            <i class="fas fa-code"></i> HTML
          </li>
          <li>
            <i class="fas fa-code"></i> CSS
          </li>
          <li>
            <i class="fas fa-code"></i> JavaScript
          </li>
          <li>
            <i class="fas fa-code"></i> jQuery
          </li>
          <li>
            <i class="fas fa-code"></i> responsive design
          </li>
          <li>
            <i class="fas fa-code"></i> React
          </li>
          <li>
            <i class="fas fa-code"></i> Bootstrap
          </li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul id="unordered-list">
          <li>
            <i class="fas fa-code"></i> APIs
          </li>
          <li>
            <i class="fas fa-code"></i> Node
          </li>
          <li>
            <i class="fas fa-code"></i> Express
          </li>
          <li>
            <i class="fas fa-code"></i> MySQL, Sequelize
          </li>
          <li>
            <i class="fas fa-code"></i> MongoDB, Mongoose
          </li>
          <li>
            <i class="fas fa-code"></i> REST
          </li>
          <li>
            <i class="fas fa-code"></i> GraphQL
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Resume;
