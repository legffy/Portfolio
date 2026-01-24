import Image from "next/image";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Newspaper } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import { title } from "process";
import { profileEnd } from "console";
export default function Home() {
  const projects = [
    {
      yt: false,
      title: "Mayhem",
      description: "",
      github: "https://github.com/legffy/mayhem-app",
      src: "MayhemLogo.png",
      tools: "Javascript-React Node Express",
    },
    {
      yt: true,
      title: "Lingo Buddy",
      description: "",
      github: "https://github.com/legffy/LingoBuddyRepo-main",
      src: "https://youtu.be/G5siPX1FCHk",
      tools: "Javascript-React Python-FastAPI",
    },
    {
      yt: false,
      title: "Digital OC",
      description: "",
      github: "https://github.com/nworobec/digitalOC",
      src:"digitaloc_logo_transparent.png",
      tools: "Javascript-React Python-Flask, Sckit Learn, and Matplot lib"
    },
  ];
  const experiences = [
    {
      role: "Incoming Backend Developer @ Ibm",
      description: "Sysplex Containers Team",
      src: "ibm.png",
    },
    {
      role: "Data Structures Mentor",
      description: "Mentored students in C++ data structures by guiding lab completion, debugging logic and memory issues, and reinforcing core concepts like trees, pointers, and runtime analysis.",
      src: "rpi.png",
    },
  ]
  const imgDetails = [{src:"hoops.jpg",class:"row-span-full h-full"},{src:"friends.jpg",class:"h-full"},{src:"gym.jpg", class:"h-full w-full"}]
  return (
    <div className="bg-[#0D0106] text-white ">
      <header className="sticky top-0 z-40 bg-[#1b1b1b] border-b-2 p-5 mb-2 border-[#9A031E] shadow-md shadow-[#9A031E]">
        <nav className="flex space-x-4">
          <ol className="flex space-x-4">
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#Home">Home</a></li>
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#Projects">Projects</a></li>
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#Experience">Experience</a></li>
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#About">About Me</a></li>
          </ol>
        </nav>
      </header>
      <main>
        <div className=" flex justify-center m-10">
          <div id = "Home" className="border-2 border-[#9A031E] flex w-fit p-5 shadow-md shadow-[#9A031E] bg-[#1b1b1b]">
            <div className="flex flex-col">
              <div className="m-5 w-[400px] border-2 border-[#C3A995] p-2 hover:scale-110 transition delay-75 duration-200 ease-in-out ">
                <img className="" src="/IMG_5748.JPG" alt="" />
              </div>
              <div className="flex space-x-5 p-4">
                <a
                  href="https://www.instagram.com/legffy/"
                  target="_blank"
                  className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
                  rel="noopener noreferrer"
                >
                  <Instagram />{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/rondalph-taylor-41543b291/"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
                >
                  <Linkedin />{" "}
                </a>
                <a
                  href="https://github.com/legffy"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
                >
                  <Github />{" "}
                </a>
                <a href="Resume (9).pdf" className="hover:scale-150 transition delay-75 duration-200 ease-in-out" target="_blank">
                  <Newspaper/>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center text-lg m-5 ">
              <h1 className="text-xl mb-5">
                Hi I&apos;m Rondalph Taylor
              </h1>
              <p className="w-96">
                 A Computer Science student at RPI specializing in AI and
                full-stack development. Experienced with Python, C++, TypeScript, and
                SQL, I build projects that blend algorithms, backend systems,
                and real-world applications.
              </p>
            </div>
          </div>
        </div>
        <div className="m-5 text-center flex flex-col items-center">
          <h2 id = "Projects" className="decoration-[#C3A995] text-4xl w-fit mb-5">Projects</h2>
          <div className="space-y-20 flex flex-col items-center">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  yt={project.yt}
                  title={project.title}
                  src={project.src}
                  description={project.description}
                  githubLink={project.github}
                  tools={project.tools}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h2></h2>
          <div className="m-5 text-center  flex flex-col items-center">
             <h2 id = "Experience" className="decoration-[#C3A995] text-4xl w-fit mb-5">Experience</h2>
            {experiences.map((experience, index) => {
              return <ExperienceCard key = {index} role = {experience.role} description = {experience.description} src = {experience.src} />
            })}
          </div>
        </div>
        <div className="flex justify-center space-x-4 m-10">
          <div className="grid grid-cols-2 grid-rows-2 h-132 w-132 border-2 border-[#9A031E] p-5 hover:scale-110 transition delay-50 duration-200 ease-in-out">
            {imgDetails.map((detail,index)=>{
              return <img key = {index} className={detail.class} src={detail.src} alt="" />
            })}
          </div>
          <div id = "About" className="text-center">
          <h2 className="text-3xl">About Me</h2>
          <p className="w-96">
            Outside of CS, I enjoy playing basketball, hanging out with friends, and lifting.
          </p>
          </div>
        </div>
      </main>
      <footer className="border-t-2 bg-[#1b1b1b] border-t-[#9A031E] shadow-md shadow-[#9A031E] flex flex-col mt-5 p-5 text-xl">
        <h2>More of me</h2>
        <div className="flex space-x-5 p-4">
          <a
            href="https://www.instagram.com/legffy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
          >
            
            <Instagram />{" "}
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rondalph-taylor-41543b291/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
          >
          
            <Linkedin />{" "}
              <span>Linkdeln</span>
          </a>
          <a
            href="https://github.com/legffy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
          >
            <Github />{" "}
            <span>GitHub</span>
          </a>
          <a href="Resume (9).pdf" className="hover:scale-150 transition delay-75 duration-200 ease-in-out" target="_blank">
                  <Newspaper/>
                     <span>Resume</span>
                </a>
        </div>
      </footer>
    </div>
  );
}
