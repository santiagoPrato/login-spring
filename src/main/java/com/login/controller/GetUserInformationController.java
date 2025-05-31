package com.login.controller;


import com.login.dto.PerfilDTO;
import com.login.user.User;
import com.login.user.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@org.springframework.web.bind.annotation.RestController
public class GetUserInformationController {
    private final UserRepository userRepository;

    public GetUserInformationController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public PerfilDTO me(HttpServletRequest request, Principal principal) {
        if (principal == null) {
            System.out.println("Principal es null, no estás autenticado.");
            throw new RuntimeException("No autenticado");
        }
        System.out.println("Principal: " + principal.getName());
        String email = principal.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        return new PerfilDTO(user.getUsername(), user.getEmail(), user.getAge());

    }
}