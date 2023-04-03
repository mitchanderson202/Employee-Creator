import "./Welcome.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>Welcome to Employee-Creator</h1>
      <h4>By Mitchell Anderson</h4>
      <p>
        <a
          href="https://www.linkedin.com/in/mitchandersondeveloper/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        ||{" "}
        <a
          href="https://github.com/mitchanderson202"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>

      <p>
        Once you enter the employee page you should see 1 employee which has
        been added by the backend. From there you can click on the Add Employee
        button to add a new Employee. Each Employee card has a Details and
        Delete button. The Details button will bring up the missing details on
        the Employee, you can double click on a field to Edit data. The Delete
        button will simply Delete that Employee.
      </p>

      <NavLink to="/employees">
        <Button data={"Click Here"} />
      </NavLink>
    </div>
  );
};

export default Welcome;
