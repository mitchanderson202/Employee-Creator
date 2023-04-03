import Button from "../Button/Button";
import "./Card.scss";

interface Props {
  employee: any;
  onDetailsClick: () => void;
  onDeleteClick: () => void;
}

const Card = ({ employee, onDetailsClick, onDeleteClick }: Props) => {
  return (
    <div className="Card">
      <div className="Card-Details">
        <h3>{`${employee.firstName} ${employee.lastName}`}</h3>
        <p>{employee.contractType}</p>
        <p>{employee.email}</p>
      </div>
      <div className="Card-Btns">
        <div>
          <Button data={"Details"} onClick={onDetailsClick} />
          <Button data={"Delete"} onClick={onDeleteClick} />
        </div>
      </div>
    </div>
  );
};

export default Card;
