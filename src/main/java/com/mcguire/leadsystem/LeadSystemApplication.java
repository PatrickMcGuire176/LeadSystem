package com.mcguire.leadsystem;

import com.mcguire.leadsystem.model.Contact;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.NoTheme;
import com.vaadin.flow.theme.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

@SpringBootApplication()
@Theme(value = "flowcrmtutorial")
@PWA(name = "Vaadin CRM",
        shortName = "CRM")
@NpmPackage(value = "line-awesome", version = "1.3.0")

public class LeadSystemApplication extends SpringBootServletInitializer implements AppShellConfigurator, CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(LeadSystemApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        String sql = "SELECT * FROM contact c";
        jdbcTemplate.queryForObject(sql, new RowMapper<Contact>() {
            public Contact mapRow(ResultSet rs, int rowNum) throws SQLException {
                System.out.println(rs.getString(1));

//                Contact student = new Contact();
//                System.out.println(rs.getString(1)):
//                System.out.println(rs.get);
//                student.setName(rs.getString(1) + rs.getString(2));
//                System.out.println(student.getName());
                return null;
            }
        });
    }
}
