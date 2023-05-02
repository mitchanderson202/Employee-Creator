import React from "react";
import Employees from "./Employees";

describe("<Employees />", () => {
  const data = "Add Employee";
  beforeEach(() => {
    cy.mount(<Employees />);
  });

  it("opens up modal to add employeess", () => {
    cy.contains("Add Employee").click();
    cy.get(".Employees").should("be.visible");
  });

  // it("opens up details modal", () => {
  //   cy.contains("Details").click();
  //   cy.get("Employee Details").should("be.visible");
  // });
});
