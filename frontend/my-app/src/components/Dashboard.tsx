import type React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProjectsAsync, joinProjectAsync, leaveProjectAsync } from '../features/projects/projectSlice';
import type { RootState, AppDispatch } from '../app/store';
import Cookies from 'js-cookie';

const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch<AppDispatch>();
    const projects = useAppSelector((state: RootState) => state.projects.projects);
    const status = useAppSelector((state: RootState) => state.projects.status);
    const error = useAppSelector((state: RootState) => state.projects.error);

    useEffect(() => {
        dispatch(fetchProjectsAsync());
    }, [dispatch]);

    const handleJoin = (projectId: string) => {
        let userId = Cookies.get('userId');
        if (!userId) {
            userId = Math.random().toString(36).substring(7);
            Cookies.set('userId', userId, { expires: 1 });
        }

        // Get the joined projects from the cookie
        const joinedProjects = Cookies.get('joinedProjects');
        const joinedProjectsArray = joinedProjects ? JSON.parse(joinedProjects) : [];

        // Check if the user has already joined the project
        if (joinedProjectsArray.includes(userId)) {
            alert('You have already joined this project.');
            return;
        }

        // Add the project ID to the joined projects array
        joinedProjectsArray.push(userId);
        Cookies.set('joinedProjects', JSON.stringify(joinedProjectsArray), { expires: 1 });

        // Dispatch the join project action
        dispatch(joinProjectAsync({ projectId, userId }));
    };

    const handleLeave = (projectId: string) => {
        const userId = Cookies.get('userId');
        if (!userId) {
            alert("User not identified.");
            return;
        }

        console.log("Leaving project:", projectId, "with userId:", userId)
        dispatch(leaveProjectAsync({ projectId, userId }));
    };

        if (status === 'loading') {
            return <div className="flex justify-center items-center h-screen">Loading...</div>;
        }

        if (status === 'failed') {
            return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
        }

        return (
            <div className="min-h-screen bg-blue-200 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">ThinkTank Research Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm text-gray-500">
                                        Participants: <span className="font-medium">{project.participants}</span>
                                    </p>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => handleJoin(project.id)}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                                        >
                                            Join
                                        </button>
                                        <button
                                            onClick={() => handleLeave(project.id)}
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                                        >
                                            Leave
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

export default Dashboard;