interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

function TeamMemberCard({ name, role, bio, skills }: TeamMemberCardProps) {
    const [firstName, ...lastNameArr] = name.split(" ");
    const lastName = lastNameArr.join(" ");

    return (
        <div className="bg-blue-950 w-full max-w-75 sm:max-w-210 min-h-135 sm:min-h-105 m-4 flex flex-col overflow-hidden ">

            <p className="text-blue-500 text-[15px] py-2 px-6 font-bold ">
                <span className="inline text-white/60">Zespół / </span>
                {role}
            </p>

            <div className="border-b border-white/20"></div>

            <div className="relative flex-1 flex flex-col overflow-hidden">

                <img
                    src="https://cms.solvro.pl/assets/8b57e57a-e701-4d9a-88e5-c254e9299fee?key=member"
                    className="absolute -top-7 -right-12 sm:-top-9 sm:-right-20 w-55 h-55 sm:w-85 sm:h-85 rounded-full"
                    alt={name}
                />

                <div className="relative mt-auto">

                    <p className="text-white text-[11px] sm:text-sm max-w-55 px-6 py-4 sm:max-w-91">
                        {bio}
                    </p>

                    <div className="flex max-[780px]:flex-wrap min-[780px]:flex-nowrap max-[780px]:max-w-75 gap-2 px-6">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`text-[11px] px-3 sm:px-4  py-1.5 sm:py-2 rounded-full font-bold ${
                                    index === 0
                                        ? "bg-blue-500 text-white border border-blue-500"
                                        : "border border-white/20 text-white/60"
                                }`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-[48px] sm:text-[84px] px-6 pb-6 pt-4 font-bold tracking-tighter leading-[0.8]">
                        <span className="block text-white">{firstName}</span>
                        <span className="block text-blue-500">{lastName}</span>
                    </h1>

                </div>
            </div>

        </div>
    );
}

export default TeamMemberCard