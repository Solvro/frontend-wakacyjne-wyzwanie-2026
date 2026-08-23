import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48 shrink-0">
        <Image
            src="/profile.png"
            alt={"Zdjęcie profilowe"}
            className="h-24 w-24 m-5 rounded-full object-cover shadow-sm bg-black/20"
            width={96}
            height={96}
            loading="eager"
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-sm font-medium text-red-700 font-mono">
            <span className="font-(family-name:--font-montserrat)">
              {role}
            </span>
          </p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Link
            href={"https://solvro.pwr.edu.pl"}
            className="flex w-fit items-center gap-1.5 text-red-400 hover:text-red-300 hover:underline underline-offset-4 text-[11px] sm:text-sm font-bold transition-colors"
        >
          Dowiedz się więcej
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
