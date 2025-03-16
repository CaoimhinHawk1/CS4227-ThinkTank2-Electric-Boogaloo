package com.example.thinktank.service;

import com.example.thinktank.model.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProjectServ {
    private final List<Project> projects = new ArrayList<>();

    public ProjectServ() {
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

    public boolean joinProject(String projectId, String userId) {
        Project project = projects.stream()
                .filter(p -> p.getId().equals(projectId))
                .findFirst()
                .orElse(null);

        if (project != null && !project.hasUserJoined(userId)) {
            project.addParticipant(userId);
            return true;
        }
        return false;
    }

    public List<Project> getUserProjects(String userId) {
        return projects.stream()
                .filter(project -> project.hasUserJoined(userId))
                .collect(Collectors.toList());
    }

    public boolean leaveProject(String projectId, String userId) {
        Project project = projects.stream()
                .filter(p -> p.getId().equals(projectId))
                .findFirst()
                .orElse(null);

        if (project != null && project.hasUserJoined(userId)) {
            project.removeParticipant(userId);
            return true;
        }
        return false;
    }
}