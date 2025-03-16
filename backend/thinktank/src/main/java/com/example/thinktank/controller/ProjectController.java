package com.example.thinktank.controller;

import com.example.thinktank.model.Project;
import com.example.thinktank.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @PostMapping("/{id}/join")
    public void joinProject(@PathVariable String id) {
        projectService.joinProject(id);
    }

    @PostMapping("/{id}/leave")
    public void leaveProject(@PathVariable String id) {
        projectService.leaveProject(id);
    }
}