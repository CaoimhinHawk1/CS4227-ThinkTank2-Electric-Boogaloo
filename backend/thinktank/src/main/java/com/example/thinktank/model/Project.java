package com.example.thinktank.model;

public class Project {
    private String id;
    private String name;
    private String description;
    private int participants;

    // Constructor, getters, and setters
    public Project(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.participants = 0;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getParticipants() {
        return participants;
    }

    public void addParticipant() {
        participants++;
    }

    public void removeParticipant() {
        if (participants > 0) {
            participants--;
        }
    }
}