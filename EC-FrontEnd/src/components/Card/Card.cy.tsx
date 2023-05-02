import { mount } from "cypress/react18";
import Card from "./Card";
import Button from "../Button/Button";

describe("<Card />", () => {
  it("renders a card with employee details", () => {
    const employee = {
      id: 1,
      firstName: "Mitchell",
      lastName: "Anderson",
      email: "mitchellanderson202@hotmail.com",
      contractType: "Full-time",
    };
    const onDetailsClick = cy.stub();
    const onDeleteClick = cy.stub();

    mount(
      <Card
        employee={employee}
        onDetailsClick={onDetailsClick}
        onDeleteClick={onDeleteClick}
      />
    );

    cy.get(".Card").should("be.visible");
    cy.contains(`${employee.firstName} ${employee.lastName}`).should(
      "be.visible"
    );
    cy.contains(employee.contractType).should("be.visible");
    cy.contains(employee.email).should("be.visible");
  });

  it("renders a details button", () => {
    const buttonText = "Details";
    mount(<Button data={buttonText} />);
    cy.contains(buttonText).should("be.visible");
    cy.get("button").should("have.class", "Button");
  });

  it("renders a delete button", () => {
    const buttonText = "Delete";
    mount(<Button data={buttonText} />);
    cy.contains(buttonText).should("be.visible");
    cy.get("button").should("have.class", "Button");
  });
});
