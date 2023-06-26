import ProgressBar from "../ProgressBar";
import SectionTitle from "../SectionTitle";
const skills = [
  {
    label: "HTML",
    percent: "100%",
  },
  {
    label: "CSS",
    percent: "90%",
  },
  {
    label: "Tailwind CSS",
    percent: "80%",
  },
  {
    label: "Javascript",
    percent: "80%",
  },
  {
    label: "React.js",
    percent: "80%",
  },
  {
    label: "Node.js",
    percent: "40%",
  },
  {
    label: "Express.js",
    percent: "60%",
  },
  {
    label: "MongoDB",
    percent: "60%",
  },
  {
    label: "Next.js",
    percent: "40%",
  },
  {
    label: "Git",
    percent: "70%",
  },
  {
    label: "Axios",
    percent: "50%",
  },
  {
    label: "REST API",
    percent: "80%",
  },
  {
    label: "Stripe.js",
    percent: "60%",
  },
  {
    label: "Json Web Token",
    percent: "80%",
  },
  {
    label: "Tanstack Query",
    percent: "60%",
  },
  {
    label: "Firebase",
    percent: "60%",
  },
];
const Skills = () => {
  return (
    <div id="skills">
      <SectionTitle heading="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        {skills.map(({ label, percent }) => (
          <div className="px-5 " key={label}>
            <ProgressBar
              label={label}
              visualParts={[
                {
                  percentage: percent,
                  color: "black",
                },
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
