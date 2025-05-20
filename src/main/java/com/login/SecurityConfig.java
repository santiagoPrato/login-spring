package com.login;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/index.html", "/createAccount.js", "/index.css", "/static/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(form -> form
                        .loginPage("/index.html") // Usá tu archivo como formulario de login
                        .loginProcessingUrl("/login") // URL donde se envía el form (action)
                        .defaultSuccessUrl("/success", true)
                        .failureUrl("/index.html?error=true")
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .logoutSuccessUrl("/index.html")
                );

        return http.build();
    }
}

