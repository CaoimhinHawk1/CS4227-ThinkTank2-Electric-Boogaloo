package com.example.thinktank.service;

import com.example.thinktank.model.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final List<Project> projects = new ArrayList<>();

    public ProjectService() {
        // Initialize with some sample projects
        projects.add(new Project("1", "AI Research", "Exploring AI applications in healthcare."));
        projects.add(new Project("2", "Climate Change", "Studying the impact of climate change on coastal cities."));
        projects.add(new Project("3", "Quantum Computing", "Developing quantum algorithms for optimization."));
    }

    public List<Project> getAllProjects() {
        return projects;
    }

    public Optional<Project> getProjectById(String id) {
        return projects.stream()
                .filter(project -> project.getId().equals(id))
                .findFirst();
    }

    public void joinProject(String id) {
        getProjectById(id).ifPresent(Project::addParticipant);
    }

    public void leaveProject(String id) {
        getProjectById(id).ifPresent(Project::removeParticipant);
    }
}