import pl from '../asssets/images/PL/home.png';
import amaze from '../asssets/images/Amaze/amazehome.png';
import dc from '../asssets/images/Dtrg/dc1.png';

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
        name: "Doctor Commission",
        description: "Manage commissions given to doctors.",
        image: <img src={dc} alt='DoctorCommission'/>,
        link:"Link to another page for images",
        apps: ['C#', 'SQL', 'HTML', 'CSS', 'Javascript']
    }
]

export default projects