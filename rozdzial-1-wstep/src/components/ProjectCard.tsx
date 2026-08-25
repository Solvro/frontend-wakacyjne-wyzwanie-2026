import {useState} from "react";

interface Technology {
    id: string; // np. UUID lub unikalny hash
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({title, description, technologies}) => {
    const [projectStatus, setProjectStatus] = useState("W trakcie");

    function handleProjectStatusChange() {
        if (projectStatus === "W trakcie") {
            setProjectStatus("Ukonczony");
        }
        else {
            setProjectStatus("W trakcie");
        }
    }

    return (
        <div>
            <p>Status: {projectStatus}</p>
            <button onClick={handleProjectStatusChange} className="border border-black px-3 py-1 mt-2">
                Zmień status projektu
            </button>
            <h1 className="mt-4 mb-4">{title}</h1>
            <p className="mb-4">{description}</p>
            <p>Technologie:</p>
            <ul>
                {technologies.map((tech) => (
                    <li key={tech.id}>{tech.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectCard

