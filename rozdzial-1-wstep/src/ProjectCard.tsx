import React,{useState} from "react";

interface Technology{
    id: string;
    name: string;
}

interface ProjectCardProps{
    title: string;
    description: string;
    technologies: Technology[];

}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, description, technologies})=>{
    const [status, setStatus] = useState<"W trakcie" | "Ukończony">("W trakcie");

    const toggleStatus = () =>{
        setStatus((prev) => (prev ==="W trakcie" ? "Ukończony" : "W trakcie"));
    };

    return (
        <div> 
             <h2>{title}</h2>
             <p>{description}</p>

             <div>
                <strong>Technologie</strong>
                <ul>
                    {technologies.map((tech)=>(
                        <li key={tech.id}>{tech.name}</li>))}
                </ul>
                
             </div>
             <div>
                <span>Staus: {status}</span>
                <button onClick={toggleStatus}>
                     Zmień status
                </button>
             </div>



        </div>
    );
};