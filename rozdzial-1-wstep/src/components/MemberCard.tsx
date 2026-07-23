import { useState } from "react";

interface MemberCardProps {
    name: string;
    role: string;
    skills: string[];
}

export const MemberCard = ({ name, role, skills }: MemberCardProps) => {

    const [isEmployed, setIsEmpolyed]=useState<boolean>(false);

    return (
        <>
            <h1>Moje imie to {name}</h1>
            <h2>W informatyce zajmuje się: {role}</h2>
            <p>Moje technologie to:</p>
                <ul>
                    {skills.map((skill,index)=><li>{index+". "+skill} </li> )}
                </ul>
            <button onClick={()=>{setIsEmpolyed(!isEmployed)}}>
                {isEmployed? <div className="bg-green-800">Zatrudniony</div>: 
                <div className="bg-red-800">"Bezrobotny"</div>}
            </button>
        </>

    )
}
