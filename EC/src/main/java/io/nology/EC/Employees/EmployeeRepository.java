package io.nology.EC.Employees;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	
	 default void init() {
	        Employee employee = new Employee();
	        employee.setFirstName("Mitchell");
	        employee.setMiddleName("Testing");
	        employee.setLastName("Anderson");
	        employee.setEmail("mitchellanderson202@gmail.com");
	        employee.setMobile("0411111111");
	        employee.setAddress("Sydney, NSW");
	        employee.setContractType("Full Time");
	        employee.setWeeklyHours(38);
	        save(employee);
	    }
}
