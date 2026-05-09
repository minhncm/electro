package com.ncm.electro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ElectroApplication {

	public static void main(String[] args) { SpringApplication.run(ElectroApplication.class, args);}

}
