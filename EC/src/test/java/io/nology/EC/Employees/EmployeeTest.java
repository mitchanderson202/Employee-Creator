package io.nology.EC.Employees;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class EmployeeTest {
	
	 @Test
	    public void testGetFirstName() {
	        Employee employee = new Employee();
	        employee.setFirstName("Mitchell");
	        assertEquals("Mitchell", employee.getFirstName());
	    }
	 
	  @Test
	    public void testGetMiddleName() {
	        Employee employee = new Employee();
	        employee.setLastName("Testing");
	        assertEquals("Testing", employee.getLastName());
	    }
	    
	    @Test
	    public void testGetLastName() {
	        Employee employee = new Employee();
	        employee.setLastName("Anderson");
	        assertEquals("Anderson", employee.getLastName());
	    }
	    
	    @Test
	    public void testGetEmail() {
	    	Employee employee = new Employee();
	    	employee.setEmail("mitchellanderson202@gmail.com");
	    	assertEquals("mitchellanderson202@gmail.com", employee.getEmail());
	    }
	    
	    @Test
	    public void testGetMobile() {
	    	Employee employee = new Employee();
	    	employee.setMobile("0411111111");
	    	assertEquals("0411111111", employee.getMobile());
	    }
	    
	    @Test
	    public void testGetAddress() {
	        Employee employee = new Employee();
	        employee.setAddress("Sydney, Australia");
	        assertEquals("Sydney, Australia", employee.getAddress());
	    }
	    
	    @Test
	    public void testGetContractType() {
	        Employee employee = new Employee();
	        employee.setContractType("Full Time");
	        assertEquals("Full Time", employee.getContractType());
	    }
	    
	    @Test
	    public void testGetWeeklyHours() {
	        Employee employee = new Employee();
	        employee.setWeeklyHours(38);
	        assertEquals(38, employee.getWeeklyHours());
	    }

}
