package com.example.thinktank.controller;

import com.example.thinktank.model.Project;
import com.example.thinktank.service.ProjectServ;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectCon {
    private final ProjectServ projectServ;

    public ProjectCon(ProjectServ projectServ) {
        this.projectServ = projectServ;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectServ.getAllProjects();
    }

    @PostMapping("/{id}/join")
    public ResponseEntity<String> joinProject(@PathVariable String id, @CookieValue(value = "userId", defaultValue = "") String userId) {
        if (userId.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not identified.");
        }

        boolean joined = projectServ.joinProject(id, userId);
        if (joined) {
            return ResponseEntity.ok("Joined project successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You have already joined this project.");
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Project>> getUserProjects(@PathVariable String userId) {
        List<Project> userProjects = projectServ.getUserProjects(userId);
        return ResponseEntity.ok(userProjects);
    }

    @PostMapping("/{id}/leave")
    public ResponseEntity<String> leaveProject(@PathVariable String id, @RequestBody Map<String, String> requestBody) {
        System.out.println("Received request to leave project: " + id);
        System.out.println("Request Body: " + requestBody); // Log the request body
        String userId = requestBody.get("userId");
        System.out.println("Extracted userId: " + userId); // Log the extracted userId

        if (userId == null || userId.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not identified.");
        }

        boolean left = projectServ.leaveProject(id, userId);
        if (left) {
            return ResponseEntity.ok("Left project successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You are not part of this project.");
        }
    }
}