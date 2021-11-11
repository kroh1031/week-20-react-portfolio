import gitHubIcon from "../media/github-icon.png";
import linkedInIcon from "../media/linkedin-icon.png";
import stackOverFlowIcon from "../media/stackoverflow-icon.png";

const Footer = () => {
  return (
    <div>
      <footer className="mt-3 mb-2">
        {/* First Icon */}

        <a href="https://github.com/kroh1031" class="icon" target="_blank">
          <img src={gitHubIcon} alt="GitHub Logo" />
        </a>

        {/* Second Icon */}

        <a
          href="https://www.linkedin.com/in/karen-roh-a43791205/" class="icon"
          target="_blank"
        >
          <img src={linkedInIcon} alt="GitHub Logo" />
        </a>

        {/* Third Icon */}

        <a
          href="https://stackoverflow.com/users/15106572/karen-roh?tab=profile"
          target="_blank" 
        >
          <img src={stackOverFlowIcon} alt="StackOverFlow Logo" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
