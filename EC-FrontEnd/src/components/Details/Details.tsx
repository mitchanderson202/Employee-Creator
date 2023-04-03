import "./Details.scss";

import { useState } from "react";

import { Employee } from "../../Utils/Interface/Interface";
import { updateEmployee } from "../../Utils/EmployeesAPI/EmployeesAPI";

interface DetailsProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
}

const Details: React.FC<DetailsProps> = ({ employee, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Employee>({
    id: employee.id,
    firstName: employee.firstName,
    middleName: employee.middleName,
    lastName: employee.lastName,
    email: employee.email,
    mobile: employee.mobile,
    address: employee.address,
    weeklyHours: employee.weeklyHours,
    contractType: employee.contractType,
  });

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateEmployee(formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="Details">
      <h1>Employee Details</h1>
      <p onClick={onClose}>Close</p>
      <h2>Double Click on a field to Edit Employee</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="Edit_Details">
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
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="Details_Display" onDoubleClick={handleDoubleClick}>
          <p>
            <strong>Name:</strong> {employee.firstName} {employee.middleName}{" "}
            {employee.lastName}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Mobile:</strong> {employee.mobile}
          </p>
          <p>
            <strong>Address:</strong> {employee.address}
          </p>
          <p>
            <strong>Weekly Hours:</strong> {employee.weeklyHours}
          </p>
          <p>
            <strong>Contract Type:</strong> {employee.contractType}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
