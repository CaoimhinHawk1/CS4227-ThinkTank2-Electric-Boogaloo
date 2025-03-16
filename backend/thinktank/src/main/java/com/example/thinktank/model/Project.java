package com.example.thinktank.model;

import java.util.HashSet;
import java.util.Set;


public class Project {
    private String id;
    private String name;
    private String description;
    private int participants;
    private Set<String> joinedUsers;

    public Project(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.participants = 0;
        this.joinedUsers = new HashSet<>();
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

    public boolean hasUserJoined(String userId) {
        return joinedUsers.contains(userId);
    }

    public void addParticipant(String userId) {
        if (!hasUserJoined(userId)) {
            joinedUsers.add(userId);
            participants++;
        }
    }

    public void removeParticipant(String userId) {
        if (joinedUsers.remove(userId)) {
            participants--;
        }
    }

    public Set<String> getJoinedUsers() {
        return joinedUsers;
    }
}