package io.nology.EC.Employees;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;

@Service
@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private ModelMapper mapper;

	public Employee createEmployee(CreateEmployeeDTO data) {
		Employee newEmployee = mapper.map(data, Employee.class);
		return this.employeeRepository.save(newEmployee);
	}

	public List<Employee> getAllEmployees() {
		return this.employeeRepository.findAll();
	}

	public Optional<Employee> getEmployeeId(Long id) {
		return this.employeeRepository.findById(id);
	}


	public void deleteEmployee(Employee employee) {
		this.employeeRepository.delete(employee);
	}

	public Employee updateEmployee(Employee employee, CreateEmployeeDTO data) {
	    Employee updatedEmployee = mapper.map(data, Employee.class);
	    updatedEmployee.setId(employee.getId());
	    return this.employeeRepository.save(updatedEmployee);
	}

}
