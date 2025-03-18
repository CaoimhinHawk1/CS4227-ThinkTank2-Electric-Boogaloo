export interface Projects {
    id: string;
    name: string;
    description: string;
    participants: number;
    joinedUsers: Set<string>;
}

export const mockProjects: Projects[] = [
    {
        id: "1",
        name: "AI Research",
        description: "Exploring AI applications in healthcare.",
        participants: 0,
        joinedUsers: new Set(),
    },
    {
        id: "2",
        name: "Climate Change",
        description: "Studying the impact of climate change on coastal cities.",
        participants: 0,
        joinedUsers: new Set(),
    },
    {
        id: "3",
        name: "Quantum Computing",
        description: "Developing quantum algorithms for optimization.",
        participants: 0,
        joinedUsers: new Set(),
    },
];