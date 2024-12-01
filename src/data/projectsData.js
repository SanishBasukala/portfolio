import pl from '../asssets/images/PL/home.png';
import amaze from '../asssets/images/Amaze/amazehome.png';
import dc from '../asssets/images/Dtrg/HRP.png';
import edc from '../asssets/images/Dtrg/ERP.png';

const projects= [
    {
        name: "PL Multimedia Website",
        description: "A website for the PL multimedia service company.",
        image: <img src={pl} alt='PlHomePage'/>,
        link:"https://www.plmultimediaservice.com/",
        apps: ['React', 'CSS', 'HTML', 'Javascript']
    },
    {
        name: "AMaze",
        description: "A top down dungeon game where you can fight, complete levels and create your own levels.",
        image: <img src={amaze} alt='AMaze'/>,
        link:"https://sanishb.itch.io/amaze",
        apps: ['C#', 'Unity']
    },
    {
        name: "Multi-tenant HRP system",
        description: "Developed a multi-tenant HRP system for healthcare facilities, managing staff scheduling, resource allocation, patient admissions, and compliance tracking to optimize hospital operations and improve patient care.",
        image: <img src={dc} alt='HRP System'/>,
        link:"no link",
        apps: ['C#', 'SQL', 'HTML', 'CSS', 'Javascript']
    },
    {
        name: "Multi-tenant ERP system",
        description: "Developed a scalable multi-tenant HRP system with core HR, billing, accounting features, secure data isolation and reporting.",
        image: <img src={edc} alt='ERP System'/>,
        link:"no link",
        apps: ['C#', 'SQL', 'HTML', 'CSS', 'Javascript', 'Angular']
    }
]

export default projects