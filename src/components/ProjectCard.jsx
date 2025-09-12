import { Github } from "lucide-react";
export default function ProjectCard(props) {
  return (
    <div className="flex justify-around border-2 border-[#9A031E] p-5 space-x-12">
      <div className="aspect-video w-[600px] border-2 border-[#C3A995] p-5">
        {props.yt ? (
          <iframe
            src="https://www.youtube.com/embed/G5siPX1FCHk?si=Q8ttvva0Geffpv1W"
            title="YouTube video player"
            frameborder="0"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <img className="w-full h-full object-cover" src={props.src}></img>
        )}
      </div>
      <div className="text-base flex flex-col items-center justify-center  border-2 border-[#C3A995] p-5">
        <h3 className="text-lg flex space-x-2" ><span>{props.title}</span><a
                          href={props.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                           className="hover:scale-150 transition delay-75 duration-200 ease-in-out"
                        >
                          <Github />{" "}
                        </a></h3>
        <p>{props.description}</p>
        <p>{props.tools}</p>
      </div>
    </div>
  );
}
