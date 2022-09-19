package com.example.demo.controllers;

import com.example.demo.entities.Patient;
import com.example.demo.repositories.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PatientRecordController {
   @Autowired
    PatientRecordRepository patientRecordRepository;
   @GetMapping("/patients")
   public List<Patient> getListOfStudents(){
       return patientRecordRepository.findAll();
   }
   @PostMapping("/patient")
    public String addPatient (@RequestBody Patient patient)
   {

       boolean recordExist = patientRecordRepository.existsById(patient.getId());
       if(!recordExist)
       {
           patientRecordRepository.save(patient);
           return "Record Added";
       }
       else {
           return "Record Already Exists";
       }

   }
    @DeleteMapping("/patient/{id}")
    public List<Patient> deletePatient(@PathVariable Integer id)
    {
        patientRecordRepository.delete(patientRecordRepository.findById(id).get());
        return patientRecordRepository.findAll();
    }
}
