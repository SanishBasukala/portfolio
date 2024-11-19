import { FaReact, FaHtml5, FaJs, FaCss3,FaUnity, FaAngular, fats } from 'react-icons/fa';
import cSharp from '../asssets/images/cLogo.png';
import sqlLogo from '../asssets/images/sqlLogo.jpg';
import { TbBrandTypescript  } from 'react-icons/tb';

const skills = [
    {
        name: "C#",
        proficiency: "70%",
        icon: <img src={cSharp} width={28}/>,
         shortName: "C#"
    },
    {
        name: "React",
        proficiency: "40%",
        icon: <FaReact style={{ color: '#61DBFB', fontSize: '24px',backgroundColor:'black' }} />,
         shortName: "React"
    },
    {
        name: "SQL",
        proficiency: "65%",
        icon: <img src={sqlLogo} width={28}/>,
         shortName: "SQL"
    },
    {
        name: "Javascript",
        proficiency: "60%",
        icon: <FaJs style={{ color: '#F7DF1E', fontSize: '24px' }} />,
         shortName: "JS"
    },
    {
        name: "HTML",
        proficiency: "90%",
        icon: <FaHtml5 style={{ color: '#E34F26', fontSize: '24px' }} />,
         shortName: "HTML"
    },
    {
        name: "CSS",
        proficiency: "70%",
        icon: <FaCss3 style={{ color: '#1572B6', fontSize: '24px' }} />,
         shortName: "CSS"
    },
    {
        name: "Unity",
        proficiency: "40%",
        icon: <FaUnity style={{ color: '#1572B6', fontSize: '24px' }} />,
         shortName: "Unity"
    },
    {
        name: "Angular",
        proficiency: "60%",
        icon: <FaAngular style={{ color: '#1572B6', fontSize: '24px' }} />,
         shortName: "Angular"
    },
    {
        name: "TypeScript",
        proficiency: "50%",
        icon: <TbBrandTypescript  style={{ color: '#1572B6', fontSize: '24px' }} />,
        shortName: "TS"
    }
]

export default skills;
