package dev.norelo.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/health")
public class HealthController {
    
    @GetMapping()
    public HealthResponse health() {
        return new HealthResponse("UP");
    }
    
    public record HealthResponse(String status) {
    }

}
