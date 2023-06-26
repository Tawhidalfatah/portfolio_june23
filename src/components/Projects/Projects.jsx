import SectionTitle from "../SectionTitle";

const projects = [
    {
        name:'ChayaChobi',
        desc: 'ChayaChobi is a summer camp-based full-stack web application that specializes in film courses and film-related skills for students and students alike to gain extra-curricular skills and knowledge during their vacations or holidays. ChayaChobi offers a wide range of courses for students provided by approved instructors.',
        techs: ['Axios' , 'Stripe', 'JWT' ,' React.js' , 'Express.js', 'MongoDB ','Firebase','Tailwind CSS'],
        live: 'https://b712-summer-camp.web.app/',
        client: 'https://github.com/Tawhidalfatah/ChayaChobi_Client',
        server: 'https://github.com/Tawhidalfatah/ChayaChobi_Server',
        
    }
]

const Projects = () => {
  return (
    <div>
      <SectionTitle heading="Projects" />
      <div>

      </div>
    </div>
  );
};

export default Projects;
