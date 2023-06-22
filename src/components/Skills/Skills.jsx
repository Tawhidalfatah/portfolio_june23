import ProgressBar from "../ProgressBar";
import SectionTitle from "../SectionTitle";
const Skills = () => {
  return (
    <div id="skills">
      <SectionTitle heading="Skills" />
      <div className="w-1/4 mx-auto">
        <ProgressBar
          label="Full progressbar"
          visualParts={[
            {
              percentage: "80%",
              color: "black",
            },
          ]}
        ></ProgressBar>
      </div>
    </div>
  );
};

export default Skills;
