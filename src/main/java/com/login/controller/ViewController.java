package com.login.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ViewController {

    /**
     * Sirve el archivo static/logged.html DESPUÉS de que Spring Security haya
     * restaurado el Authentication de la sesión.
     */
    @GetMapping(value = "/logged.html", produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<Resource> serveLoggedHtml() {
        // Busca el recurso en src/main/resources/static/logged.html
        Resource page = new ClassPathResource("static/logged.html");
        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_HTML)
                .body(page);
    }
}