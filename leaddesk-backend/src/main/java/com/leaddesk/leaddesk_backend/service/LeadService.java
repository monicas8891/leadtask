package com.leaddesk.leaddesk_backend.service;

import com.leaddesk.leaddesk_backend.entity.Lead;
import com.leaddesk.leaddesk_backend.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeadService {

    @Autowired
    private LeadRepository leadRepository;

    // Save a new lead
    public Lead saveLead(Lead lead) {
        return leadRepository.save(lead);
    }

    // Get all leads
    public List<Lead> getAllLeads() {
        return leadRepository.findAll();
    }

    // Search leads by name
    public List<Lead> searchLeads(String name) {
        return leadRepository.findByNameContainingIgnoreCase(name);
    }

    // Update lead status
    public Lead updateStatus(Long id, String status) {
        Lead lead = leadRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Lead not found"));

        lead.setStatus(status);

        return leadRepository.save(lead);
    }
}