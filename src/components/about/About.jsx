import "./Main.css";

export default function About() {
  return (
    <div className="about">
      <div className="profile-pic">
        <div className="pic">
          <img src="http://www.amfun.net/images/headshot.jpg" alt="" />
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a detail oriented Technical Writer with experience designing, writing, and editing computer hardware, software, and engineering documentation. I have written product user guides, created engineering specs, and designed help systems. I am skilled in planning and producing documentation based on knowledge of products, user requirements, and business objectives. I am a user advocate devoted to enhancing the user’s experience. I have a proven ability to build and foster relationships within a team of writers, with subject matter experts, and with other teams.
          </p>
          <div className="about-links">
            <a href="ben.l.fisher@gmail.com">ben.l.fisher@gmail.com</a>
            <a href="https://www.linkedin.com/in/ben-fisher-a930a4bb/">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  );
}
