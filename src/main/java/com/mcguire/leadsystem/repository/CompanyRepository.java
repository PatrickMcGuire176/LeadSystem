package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Company;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {

}
