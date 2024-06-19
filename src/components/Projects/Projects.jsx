import './Projects.css'

import ProjectCard from '../../ui/ProjectCard';

export default function Projects() {

    const projects = [
        {
            name: 'Book Sharing Application',
            description: 'A plug and play mobile application built for Zolo Properties Pvt. Ltd. to facilitate the sharing of books among the residents of Zolo properties and Zolo Scholar users.',
            image: 'https://i.postimg.cc/TYL145xx/cover-web.jpg',
        },
        {
            name: 'Scaler Campus App',
            description: 'A complete app for students of Scaler School of Technology to access their course attendance, lab access, leave management and much more.',
            image: 'https://i.postimg.cc/TYL145xx/cover-web.jpg',
        },
        {
            name: 'Quantum Random Numbers',
            description: 'PRNG are algorithms that help to create randomness in programs, but they are not truly random. This algorithm uses a Quantum Computer to generate truly random numbers.',
            image: 'https://i.postimg.cc/TYL145xx/cover-web.jpg',
        },
        {
            name: 'Web & Mail Printer',
            description: 'Web Mail Printer is an open-source project aimed at providing a convenient solution for printing directly from web-based email clients',
            image: 'https://i.postimg.cc/TYL145xx/cover-web.jpg',
        },

    ];

    return (
        <div className='projects' id='projects'>
            <div className="projectsCnt">
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} name={project.name} description={project.description} image={project.image} />
                        )
                    })
                }
            </div>
        </div>
    );
}