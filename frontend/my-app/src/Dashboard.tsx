import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAsync, joinProjectAsync, leaveProjectAsync } from './features/projects/projectSlice';
import { RootState, AppDispatch } from './app/store';


const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const projects = useSelector((state: RootState) => state.projects.projects);
    const status = useSelector((state: RootState) => state.projects.status);
    const error = useSelector((state: RootState) => state.projects.error);

    useEffect(() => {
        dispatch(fetchProjectsAsync());
    }, [dispatch]);

    const handleJoin = (id: string) => {
        dispatch(joinProjectAsync(id));
    };

    const handleLeave = (id: string) => {
        dispatch(leaveProjectAsync(id));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>ThinkTank Research Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p>Participants: {project.participants}</p>
                        <button onClick={() => handleJoin(project.id)}>Join</button>
                        <button onClick={() => handleLeave(project.id)}>Leave</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;