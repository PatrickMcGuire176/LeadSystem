package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Status;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status, Long> {

}
