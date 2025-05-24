spring:
    datasource:
        url: jdbc:postgresql://localhost:5432/jwt-security
        username: ${DB_USER}
        password: ${DB_PASSWORD}

Este proyecto requiere configurar variables de entorno: DB_USER y DB_PASSWORD.