package io.nology.EC.Employees;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class CreateEmployeeDTOTest {

    @Test
    public void testCreateEmployeeDTO() {
        CreateEmployeeDTO employeeDTO = new CreateEmployeeDTO();
        
      
        employeeDTO.setFirstName("Mitchell");
        employeeDTO.setMiddleName("Testing");
        employeeDTO.setLastName("Anderson");
        employeeDTO.setEmail("mitchellanderson202@gmail.com");
        employeeDTO.setMobile("0411111111");
        employeeDTO.setAddress("Sydney, Australia");
        employeeDTO.setContractType("Full time");
        employeeDTO.setWeeklyHours(38);

        
        assertEquals("Mitchell", employeeDTO.getFirstName());
        assertEquals("Testing", employeeDTO.getMiddleName());
        assertEquals("Anderson", employeeDTO.getLastName());
        assertEquals("mitchellanderson202@gmail.com", employeeDTO.getEmail());
        assertEquals("0411111111", employeeDTO.getMobile());
        assertEquals("Sydney, Australia", employeeDTO.getAddress());
        assertEquals("Full time", employeeDTO.getContractType());
        assertEquals(38, employeeDTO.getWeeklyHours());
    }
    
    
}