import type React from "react";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import type { Project } from '../models/project';

const ProjectHome: React.FC = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState<Project | null>(null); // Define the type

    useEffect(() => {
        fetch(`http://localhost:8080/api/projects/${projectId}`)
            .then((response) => response.json())
            .then((data: Project) => setProject(data)) // Type the response
            .catch((error) => console.error('Error fetching project details:', error));
    }, [projectId]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">{project.name}</h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-gray-600">{project.description}</p>
                    <p className="mt-4 text-sm text-gray-500">
                        Participants: <span className="font-medium">{project.participants}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome;