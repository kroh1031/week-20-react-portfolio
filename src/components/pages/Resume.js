import resume from "../../media/resume.a02ghs.pdf";

const Resume = () => {
  return (
    <div className="container mt-3">
      <h1>Resume</h1>
      <div>
        Open my{" "}
        <a href={resume} target="_blank">
          resume
        </a>
      </div>
    </div>
  );
};
export default Resume;
