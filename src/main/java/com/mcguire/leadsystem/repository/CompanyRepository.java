package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Company;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    @Query(value="SELECT name FROM company c where c.name =:name", nativeQuery = true)
    String findCompanyByEmail(@Param("name") String name);

    @Query(value="SELECT id FROM company c where c.name =:name", nativeQuery = true)
    Long findCompanyIdByName(@Param("name") String name);

}
