import React from "react";

export default function UsersLayout({
    children,
    stats,
}: {
    children: React.ReactNode;
    stats: React.ReactNode;
}) {
    return (
        <div>
            {stats}
            {children}
        </div>
    );
}
