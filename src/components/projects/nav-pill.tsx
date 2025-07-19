import React from 'react';

type NavPillProps = {
    heading: string;
    filter: string;
    setFilter: (filter: string) => void;
    active?: boolean;
}

export const NavPill: React.FC<NavPillProps> = ({heading, filter, setFilter, active}) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link${active ? " active" : ""}`}
                data-bs-toggle="pill"
                data-bs-target={filter}
                type="button"
                onClick={() => setFilter(filter)}
            >
                {heading}
            </button>
        </li>    
    );
}