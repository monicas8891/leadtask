package com.leaddesk.leaddesk_backend.controller;

import jakarta.validation.Valid;
import com.leaddesk.leaddesk_backend.entity.Lead;
import com.leaddesk.leaddesk_backend.service.LeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "*")
public class LeadController {

    @Autowired
    private LeadService leadService;


    // Get all leads
    @GetMapping
    public List<Lead> getAllLeads() {
        return leadService.getAllLeads();
    }

    // Search leads by name
    @GetMapping("/search")
    public List<Lead> searchLeads(@RequestParam String name) {
        return leadService.searchLeads(name);
    }

    // Update lead status
    @PostMapping
    public Lead saveLead(@Valid @RequestBody Lead lead) {
        return leadService.saveLead(lead);
    }

    @PutMapping("/{id}/status")
    public Lead updateStatus(@PathVariable Long id,
                             @RequestParam String status) {
        return leadService.updateStatus(id, status);
    }
}