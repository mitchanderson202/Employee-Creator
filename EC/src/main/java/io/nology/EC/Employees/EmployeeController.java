package io.nology.EC.Employees;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;



@RestController
@RequestMapping("employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data) {
        Employee createdEmployee = employeeService.createEmployee(data);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employeeList = employeeService.getAllEmployees();
        return new ResponseEntity<>(employeeList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Optional<Employee> foundEmployee = employeeService.getEmployeeId(id);
        if (foundEmployee.isPresent()) {
            return new ResponseEntity<>(foundEmployee.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id, @Valid @RequestBody CreateEmployeeDTO data) {
        Optional<Employee> foundEmployee = employeeService.getEmployeeId(id);
        if (foundEmployee.isPresent()) {
            Employee updatedEmployee = employeeService.updateEmployee(foundEmployee.get(), data);
            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Employee> updateEmployeeId(@PathVariable Long id, @Valid @RequestBody CreateEmployeeDTO data) {
        Optional<Employee> foundEmployee = employeeService.getEmployeeId(id);
        if (foundEmployee.isPresent()) {
            Employee updatedEmployee = employeeService.updateEmployee(foundEmployee.get(), data);
            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteEmployeeId(@PathVariable Long id) {
        Optional<Employee> foundEmployee = employeeService.getEmployeeId(id);
        if (foundEmployee.isPresent()) {
            employeeService.deleteEmployee(foundEmployee.get());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    
    
}
