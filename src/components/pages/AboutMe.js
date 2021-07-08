import profilePic from "../../media/about-me.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6">
          <h1>About Me</h1>
          <br />
          <h4 className="text-center">
            Name: Karen Roh
            <br />
            Born in: Miami, FL
          </h4>
          <h5 className="text-center">
            I'm an ordinary 18 year old high school graduate that found interest
            in computer programming while searching for a field that I wanted to
            major in.
            <br />
            I speak English and Korean.
            <br />
            I coordinate very well with people and know the way to work as a
            team.
            <br />
            My goal is to become a full stack web developer.
            <br />
          </h5>
        </div>
        <div className="col-sm-6">
          <img
            className="rounded"
            src={profilePic}
            alt="Profile Image"
            width="400"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;