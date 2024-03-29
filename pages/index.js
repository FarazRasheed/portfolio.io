import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Faraz Rasheed",
          description: "A passionate Mobile App Developer.",
          image: "shorturl.at/euxOZ",
          url: "https://portfolio-io.vercel.app/",
          keywords: [
            "Faraz",
            "Faraz Rasheed",
            "@FarazRasheed",
            "faraxraxeed",
            "Portfolio",
            "Faraz Portfolio ",
            "Faraz Rasheed Portfolio",
            "Android",
            "mobile engineer",
            "software engineer",
            "android",
            "compose",
            "mvvm",
            "clean architecutre",
            "ci",
            "cd",
            "Android SDK/NDK",
            "Gradle",
            "Flutter",
            "Cross-platform Mobile Frameworks",
            "cross-functional teams",
            "continuous integration (CI)",
            "Architectural Design Patterns",
            "API Design and Integration",
            "Agile Scrum Project Management",
            "Unit and UI Automated Testing",
            "Version Control and Code Collaboration",
            "Push Messages",
            "App Security",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
