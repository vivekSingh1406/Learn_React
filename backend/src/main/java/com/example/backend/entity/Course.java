package com.example.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;

    @NotBlank(message = "Course name is required")
    private String courseName;

    @NotBlank(message = "Description required")
    private String description;

    @Future(message = "Start date must be in the future")
    private LocalDate startDate;

    @Future(message = "End date must be after start date")
    private LocalDate endDate;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private User instructor;
}

