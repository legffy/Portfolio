import Image from "next/image";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Newspaper } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { title } from "process";
import { profileEnd } from "console";
export default function Home() {
  const projects = [
    {
      yt: false,
      title: "Mayhem",
      description: "",
      github: "https://github.com/legffy/mayhem-app",
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEBIWFREXFhcRFRYSExYXExYYFhkWFxgVFxYaHiggGBoxHRYVITIhMSorLjAuGB8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAECBAP/xABMEAABAwIDBAYFBQ0GBgMAAAABAAIDBBEFEiEGBzFREyJBYXGBFDI1c5EjkqGxsggVJTNCUmJydJOis8IXU4PB0fAkVILS0+FDZIT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXF0HKIiAiIgIupcO3wXZAREQEREBERAREQEREBERARcNcDw8FygIiICIuLoOUREBV9vfqa6lgjraKZ8ZheBK0ascx5Au5h0NnW142JsrBXixrDWVUEtPILslY6N3g4EXHeOPkghG7XeWzEj6PUNEdWBmFj8nKBxLL6hw7W/C6sRagPbPh9UQDlqKeXQ/pMOhtyPLk5bU7OY7DWwRTROb8oxshaHAuaSNWkcbg3CDLIi8uIYhDA0vmkaxoBd1nAaAXNrnVBCtq9oR998NoWH/5HTy291K2MH+I+QU/C1q2Sxd9btBDUv4y1D3Afms6OQMZ5NDR8VsoEHKLzYjXR08b5ZnhkbBmc48AOa7+kMzNbmGZwLmi4u4C1yBxI1HxQfZERAREQcXS6rHabboSYrR4dSvuxtS0VLmnQube0NxyIu7vFuwrOb2cSmpMPM8Dsssc0LmnsuHjQjtaeBHIoJmiwex20kOJUzKiLQnqyMvcxvHrMPxv3ggrOICIuCgrzZbaPLjWI0Lzo57Z4rntbDEHtHLTKfIqwwtZ9ssZNPjs1XA4O6OoZICwghwbHG17bjjcZmnxK2Ow3EYqhjZIntc1zWvGVwJs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",
      tools: "Javascript-React Node Express",
    },
    {
      yt: true,
      title: "Lingo Buddy",
      description: "",
      github: "https://github.com/legffy/LingoBuddyRepo-main",
      src: "https://youtu.be/G5siPX1FCHk",
      tools: "Javascript-React Python-FastApi",
    },
  ];
  const imgDetails = [{src:"hoops.jpg",class:"row-span-full h-full"},{src:"friends.jpg",class:"h-full"},{src:"gym.jpg", class:"h-full w-full"}]
  return (
    <div className="bg-[#0D0106] text-white ">
      <header className="sticky top-0 z-40 bg-[#1b1b1b] border-b-2 p-5 mb-2 border-[#9A031E] shadow-md shadow-[#9A031E]">
        <nav className="flex space-x-4">
          <ol className="flex space-x-4">
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#Home">Home</a></li>
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#Projects">Projects</a></li>
            <li className="hover:bg-slate-900 rounded-2xl p-2"><a href="#About">About Me</a></li>
          </ol>
        </nav>
      </header>
      <main>
        <div className=" flex justify-center m-10">
          <div id = "Home" className="border-2 border-[#9A031E] flex w-fit p-5 shadow-md shadow-[#9A031E] bg-[#1b1b1b]">
            <div className="flex flex-col">
              <div className="m-5 w-[400px] border-2 border-[#C3A995] p-2 hover:scale-110 transition delay-75 duration-200 ease-in-out ">
                <img className="" src="/ProfilePhoto.jpg" alt="" />
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
                <a href="Resume.pdf" className="hover:scale-150 transition delay-75 duration-200 ease-in-out" target="_blank">
                  <Newspaper/>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center text-lg m-5 ">
              <h1 className="text-xl mb-5">
                Hi I&aposm Rondalph Taylor
              </h1>
              <p className="w-96">
                 A Computer Science student at RPI specializing in AI and
                full-stack development. Experienced with C++, TypeScript, and
                SQL, I build projects that blend algorithms, backend systems,
                and real-world applications.
              </p>
            </div>
          </div>
        </div>
        <div className="m-5 text-center">
          <h2 id = "Projects" className="underline decoration-[#C3A995] text-4xl w-fit mb-5">Projects</h2>
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
        <div className="flex justify-center space-x-4 m-10">
          <div className="grid grid-cols-2 grid-rows-2 h-132 w-132 border-2 border-[#9A031E] p-5 hover:scale-110 transition delay-50 duration-200 ease-in-out">
            {imgDetails.map((detail,index)=>{
              return <img key = {index} className={detail.class} src={detail.src} alt="" />
            })}
          </div>
          <div id = "About" className="text-center">
          <h2 className="text-3xl">About Me</h2>
          <p className="w-96">
            Outside of CS, I enjoying playing basketball, hanging out with friends, and lifting in the gym
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
          <a href="Resume.pdf" className="hover:scale-150 transition delay-75 duration-200 ease-in-out" target="_blank">
                  <Newspaper/>
                     <span>Resume</span>
                </a>
        </div>
      </footer>
    </div>
  );
}
