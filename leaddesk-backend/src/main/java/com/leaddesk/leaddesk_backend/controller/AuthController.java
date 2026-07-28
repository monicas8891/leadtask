package com.leaddesk.leaddesk_backend.controller;

import com.leaddesk.leaddesk_backend.dto.LoginRequest;
import com.leaddesk.leaddesk_backend.dto.LoginResponse;
import com.leaddesk.leaddesk_backend.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {

        // Temporary login for testing
        if ("admin".equals(request.getUsername()) &&
                "admin123".equals(request.getPassword())) {

            String token = jwtService.generateToken(request.getUsername());

            return ResponseEntity.ok(new LoginResponse(token));
        }

        return ResponseEntity.status(401).build();
    }
}