package com.login.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PerfilDTO {
    private String username;
    private String email;
    private int age;

    public PerfilDTO(String username, String email, int age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }

}