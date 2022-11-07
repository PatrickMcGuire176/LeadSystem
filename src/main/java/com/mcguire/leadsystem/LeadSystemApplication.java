package com.mcguire.leadsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

@SpringBootApplication()
public class LeadSystemApplication extends SpringBootServletInitializer
        //implements CommandLineRunner
{
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static void main(String[] args) {
        SpringApplication.run(LeadSystemApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedHeaders("*");
            }
        };
    }


//    @Override
//    public void run(String... args) throws Exception {
//
//        String sql = "SELECT * FROM contact c";
//        jdbcTemplate.queryForObject(sql, new RowMapper<Contact>() {
//            public Contact mapRow(ResultSet rs, int rowNum) throws SQLException {
//                System.out.println("Hit the database yay " + rs.getString(1));
//
////                Contact student = new Contact();
////                System.out.println(rs.getString(1)):
////                System.out.println(rs.get);
////                student.setName(rs.getString(1) + rs.getString(2));
////                System.out.println(student.getName());
//                return null;
//            }
//        });
//    }
}
