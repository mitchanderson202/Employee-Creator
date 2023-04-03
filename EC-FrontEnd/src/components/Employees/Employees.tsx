import "./Employees.scss";
import { useEffect, useState } from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Details from "../Details/Details";
import {
  createEmployee,
  deleteEmployee,
  readEmployee,
} from "../../Utils/EmployeesAPI/EmployeesAPI";
import { Employee } from "../../Utils/Interface/Interface";

interface Props {
  employee: Employee;
  onDetailsClick: (employee: Employee) => void;
  onDeleteClick: (employee: Employee) => void;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [detailsForm, setDetailsForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  useEffect(() => {
    readEmployee()
      .then((employees: Employee[]) => setEmployees(employees))
      .catch((error) => console.log(error));
  }, [showForm, detailsForm]);

  const handleAddEmployeeClick = () => {
    setShowForm(true);
    setDetailsForm(false);
  };

  const handleDetailsClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowForm(false);
    setDetailsForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setDetailsForm(false);
  };

  const handleFormSubmit = (employee: Employee) => {
    createEmployee(employee).then(() => {
      readEmployee()
        .then((employees: Employee[]) => setEmployees(employees))
        .then(() => setShowForm(false))
        .catch((error) => console.log(error));
    });
  };

  const handleDeleteClick = (employee: Employee) => {
    deleteEmployee(employee.id)
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== employee.id)
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Employees">
      <h1>Employees</h1>

      <div className="EmployeesGrid">
        <p>
          Click "Details" to get more information about each employee.
          <Button data={"Add Employee"} onClick={handleAddEmployeeClick} />
        </p>
        {employees.map((employee: Employee) => (
          <Card
            key={employee.id}
            employee={employee}
            onDetailsClick={() => handleDetailsClick(employee)}
            onDeleteClick={() => handleDeleteClick(employee)}
          />
        ))}
        {showForm && (
          <Form
            isOpen={showForm}
            onSubmit={handleFormSubmit}
            onClose={handleCloseForm}
          />
        )}
        {detailsForm && selectedEmployee && (
          <Details
            employee={selectedEmployee}
            onClose={handleCloseForm}
            isOpen={false}
          />
        )}
      </div>
    </div>
  );
};

export default Employees;
