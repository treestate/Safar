package com.codeBind.Safar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@SpringBootApplication
@PropertySources({
		@PropertySource("classpath:views.properties"),
		@PropertySource("classpath:database.properties")
})
public class SafarApplication {

	public static void main(String[] args) {
		SpringApplication.run(SafarApplication.class, args);
	}
}
