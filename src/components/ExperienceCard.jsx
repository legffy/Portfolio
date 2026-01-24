
export default function ExperienceCard(props) {
  return (
    <div className="border-2 border-[#9A031E] w-2/3 flex text-center">
      {/* Text */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <h3 className="border-[#C3A995] font-bold">{props.role}</h3>
        <p>{props.description}</p>
      </div>

      {/* Image */}
      <div className="w-96 h-96 flex-shrink-0">
        <img
          className="h-full w-84"
          src={props.src}
          alt=""
        />
      </div>
    </div>
  );
}
