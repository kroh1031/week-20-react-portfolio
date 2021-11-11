import profilePic from "../../media/about-me.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-6">
          <h1>About Me</h1>
          <br />

          <h5 className="text-center">
            I'm a passionate and zealous Full Stack Web Developer prepared to
            take on complex tasks doing everything I can to exceed expectations
            and delight others.
            <br />
            <br />
            I coordinate very well with people and know the way to work as a
            team.
            <br />
            <br />
            I'm an attentive and quick learner that is always receptive to
            training in order to become the perfect match for the constantly
            growing IT industry.
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
