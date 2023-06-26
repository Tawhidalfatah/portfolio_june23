import { Zoom } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
  return (
    <div className="my-10">
      <Zoom>
        <h1 className="text-2xl md:text-5xl text-center oy-5 md:py-10">
          {heading}
        </h1>
      </Zoom>
      <Zoom delay={500}>
        <div className="border w-1/4 md:w-2/12 border-black mx-auto"></div>
      </Zoom>
    </div>
  );
};

export default SectionTitle;
