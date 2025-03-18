    import type React from 'react';
    import { useParams } from "react-router-dom";
    import { useAppSelector } from "../app/hooks";

    const Home: React.FC = () => {
        const { projectId } = useParams();
        const projects = useAppSelector((state) => state.projects.projects);
        const project = projects.find((p) => p.id === projectId);

        if (!project) {
            return <div>Project not found.</div>;
        }

        return (
            <div className="min-h-screen bg-blue-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">{project.name}</h1>
                    <p className="text-gray-600 mb-8">{project.description}</p>
                </div>
            </div>
        );
    };

    export default Home;


// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import type { Project } from '../models/project';
// import { useAppSelector } from "../app/hooks";
//
// const Home: React.FC = () => {
//     const [projects, setProjects] = useState<Project[]>([]);
//     const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//     const [error, setError] = useState<string | null>(null);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const fetchProjects = async () => {
//             const userId = Cookies.get('userId');
//             if (!userId) {
//                 setError('User not identified.');
//                 setStatus('error');
//                 return;
//             }
//
//             setStatus('loading');
//             try {
//                 const response = await fetch(`http://localhost:8080/api/projects/user/${userId}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch projects');
//                 }
//                 const data: Project[] = await response.json();
//                 setProjects(data);
//                 setStatus('success');
//             } catch (error) {
//                 console.error('Error fetching user projects:', error);
//                 setError('Failed to fetch projects. Please try again later.');
//                 setStatus('error');
//             }
//         };
//
//         fetchProjects();
//     }, []);
//
//     const handleProjectClick = (projectId: string) => {
//         navigate(`/project/${projectId}`);
//     };
//
//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }
//
//     if (status === 'error') {
//         return <div className="text-red-500">{error}</div>;
//     }
//
//     return (
//         <div className="min-h-screen bg-gray-100 py-8">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Projects</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {projects.map((project) => (
//                         <div
//                             key={project.id}
//                             className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
//                             onClick={() => handleProjectClick(project.id)}
//                         >
//                             <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
//                             <p className="mt-2 text-gray-600">{project.description}</p>
//                             <p className="mt-4 text-sm text-gray-500">
//                                 Participants: <span className="font-medium">{project.participants}</span>
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Home;