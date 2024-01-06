'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react';

const originalJobs = [
    { job: "Software Engineer", location: "Remote - Miami HQ", team:  "Engineering"},
    { job: "Researcher", location: "US Remote", team:  "Research"},
    { job: "Team Leader", location: "Miami HQ", team:  "Leadership"},
    { job: "Software Engineer", location: "Remote - Miami HQ", team:  "Engineering"},
    { job: "Senior Software Engineer", location: "Remote - Miami HQ", team:  "User Experience"},
    { job: "Software Engineer", location: "Remote - Miami HQ", team:  "Web Infrastructure"},
    { job: "Senior Software Engineer", location: "Remote - Miami HQ", team:  "Web Infrastructure"},
    { job: "Campus Manager", location: "Miami HQ", team:  "HQ"},
    { job: "Payroll Supervisor", location: "Remote - Miami HQ", team:  "HQ"},
    { job: "Senior Campus Manager", location: "Remote - Miami HQ", team:  "Engineering"},
    { job: "Senior Software Engineer", location: "Remote - Miami HQ", team:  "Researcher"},
];

export default function Page() {
    const [location, setLocation] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [jobs, setJobs] = useState(originalJobs);

    useEffect(() => {
        const filteredJobs = jobType === "" 
            ? originalJobs 
            : originalJobs.filter(job => job.team === jobType);
        setJobs(filteredJobs);
    }, [jobType]);

    useEffect(() => {
        let filteredJobs = originalJobs;
    
        if (jobType !== "") {
            filteredJobs = filteredJobs.filter(job => job.team === jobType);
        }
    
        if (selectedLocation !== "") {
            filteredJobs = filteredJobs.filter(job => job.location === selectedLocation);
        }
    
        setJobs(filteredJobs);
    }, [jobType, selectedLocation]);

    return (
        <main className="flex min-h-screen flex-col items-stretch justify-between">
            <div className="mx-6">
                <h1 className="text-5xl font-regular mb-16 mt-52">Open Roles</h1>
                <hr className="border-t border-black w-full" />
                <h2 className="text-3xl font-semibold mt-10 mb-5">Current Open Roles</h2>
                <div className="flex justify-start mb-5">
                    <select 
                        className="border border-gray-300 rounded-md px-4 py-2"
                        value={selectedLocation} 
                        onChange={e => setSelectedLocation(e.target.value)}
                    >
                        <option value="">All Locations</option>
                        <option value="Remote - Miami HQ">Remote - Miami HQ</option>
                        <option value="US Remote">US Remote</option>
                        <option value="Miami HQ">Miami HQ</option>
                    </select>

                    <select
                        className="border border-gray-300 rounded-md px-4 py-2"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">All teams</option>
                        <option value="Engineering">Software Engineer</option>
                        <option value="Research">Researcher</option>
                        <option value="User Experience">User Experience</option>
                        <option value="Leadership">Leadership Leader</option>
                        <option value="Web Infrastructure">Web Infrastructure</option>
                        <option value="HQ">HQ</option>
                    </select>
                </div>
                <h2 className="font-semibold mb-16">Showing 11 Jobs.</h2>
            <div className="grid gap-0">
                {jobs.map((job, index) => (
                    <div key={index} className="border-t border-black py-2 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">{job.job}</h3>
                            <p>{job.location} - {job.team}</p>
                        </div>
                        <Link href={`https://www.greenhouse.com`}>
                            <span className="flex items-center underline">
                                <span>Apply now</span>
                                <span className="ml-1 mt-1.5">
                                    <ArrowIcon />
                                </span>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </main>
    )
}

function ArrowIcon() {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    );
}
