import "./Form.scss";

import { useState } from "react";

import { Employee } from "../../Utils/Interface/Interface";
import { createEmployee } from "../../Utils/EmployeesAPI/EmployeesAPI";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (employee: Employee) => void;
  employee?: Employee;
}

const Form: React.FC<FormProps> = ({ employee, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<Employee>({
    id: employee?.id || 0,
    firstName: employee?.firstName || "",
    middleName: employee?.middleName || "",
    lastName: employee?.lastName || "",
    email: employee?.email || "",
    mobile: employee?.mobile || "",
    address: employee?.address || "",
    weeklyHours: employee?.weeklyHours || 0,
    contractType: employee?.contractType || "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createEmployee(formData).then(() => {
      onClose();
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="Modal">
      <h1>Add Employee</h1>
      <p onClick={onClose}>Close</p>

      <form onSubmit={handleSubmit} className="Form">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Weekly Hours:
          <input
            type="number"
            name="weeklyHours"
            value={formData.weeklyHours}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Contract Type:
          <input
            type="text"
            name="contractType"
            value={formData.contractType}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
