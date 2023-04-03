package io.nology.EC;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import io.nology.EC.Employees.EmployeeRepository;

@SpringBootApplication
public class BackendApplication {

	  public static void main(String[] args) {
	        ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
	        EmployeeRepository employeeRepository = context.getBean(EmployeeRepository.class);
	        employeeRepository.init();
	    }
	
	@Configuration
	@ComponentScan("io.nology.EC")
	public class AppConfig {

	    @Bean
	    public ModelMapper modelMapper() {
	        return new ModelMapper();
	    }
	}


}

