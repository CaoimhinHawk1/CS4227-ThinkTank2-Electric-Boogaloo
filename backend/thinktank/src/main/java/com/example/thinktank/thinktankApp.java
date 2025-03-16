package com.example.thinktank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class thinktankApp {
	public static void main(String[] args) {
		SpringApplication.run(thinktankApp.class, args);
	}
}