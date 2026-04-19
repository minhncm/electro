package com.ncm.electro;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Encoders;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.crypto.SecretKey;

@SpringBootApplication
@EnableJpaAuditing
public class ElectroApplication {

	public static void main(String[] args) { SpringApplication.run(ElectroApplication.class, args);}

}
