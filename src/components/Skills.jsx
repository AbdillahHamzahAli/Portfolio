import { skillData } from "../assets/skills/skill-data";

const Skills = () => {
  return (
    <div name="skill" className="bg-white w-full my-auto sm:h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-black inline font-bold border-b-4 border-gray-700">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 uppercase">
          {skillData.map(({ name, image }) => (
            <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
              <img className="mx-auto w-20 " src={image} alt={name} />
              <p className="my-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
