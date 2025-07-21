const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-5 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="font-bold text-4xl inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold text-4xl">
            <p>I'am Hamzah, Nice to meet you</p>
          </div>
          <div>
            <p>
              "I'm a fullstack web developer with experience in designing and
              developing innovative web solutions. With a strong focus on
              detail, security, and performance, I'm committed to delivering
              exceptional user experiences. I also possess excellent
              collaboration skills and thrive on tackling new challenges to
              create impactful web solutions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
