import Form from "./Form";

describe("Form", () => {
  const employee = {
    id: 1,
    firstName: "Mitchell",
    middleName: "Testing",
    lastName: "Anderson",
    email: "mitchellanderson202@hotmail.com",
    mobile: "0411111111",
    address: "123 Fake Street",
    weeklyHours: 38,
    contractType: "Full Time",
  };

  beforeEach(() => {
    cy.mount(
      <Form
        isOpen={true}
        onClose={() => {}}
        onSubmit={() => {}}
        employee={employee}
      />
    );
  });

  it("renders the form with pre-filled data", () => {
    cy.get("input[name=firstName]").should("have.value", employee.firstName);
    cy.get("input[name=middleName]").should("have.value", employee.middleName);
    cy.get("input[name=lastName]").should("have.value", employee.lastName);
    cy.get("input[name=email]").should("have.value", employee.email);
    cy.get("input[name=mobile]").should("have.value", employee.mobile);
    cy.get("input[name=address]").should("have.value", employee.address);
    cy.get("input[name=weeklyHours]").should(
      "have.value",
      employee.weeklyHours.toString()
    );
    cy.get("input[name=contractType]").should(
      "have.value",
      employee.contractType
    );
  });

  it("updates form data when inputs change", () => {
    const newEmployeeData = {
      id: 1,
      firstName: "Michael",
      middleName: "Test",
      lastName: "Harrison",
      email: "michaelharrison@hotmail.com",
      mobile: "0422222222",
      address: "456 Fake Street",
      weeklyHours: 20,
      contractType: "Part Time",
    };

    cy.get("input[name=firstName]").clear().type(newEmployeeData.firstName);
    cy.get("input[name=middleName]").clear().type(newEmployeeData.middleName);
    cy.get("input[name=lastName]").clear().type(newEmployeeData.lastName);
    cy.get("input[name=email]").clear().type(newEmployeeData.email);
    cy.get("input[name=mobile]").clear().type(newEmployeeData.mobile);
    cy.get("input[name=address]").clear().type(newEmployeeData.address);
    cy.get("input[name=weeklyHours]")
      .clear()
      .type(newEmployeeData.weeklyHours.toString());
    cy.get("input[name=contractType]")
      .clear()
      .type(newEmployeeData.contractType);

    cy.get("input[name=firstName]").should(
      "have.value",
      newEmployeeData.firstName
    );
    cy.get("input[name=middleName]").should(
      "have.value",
      newEmployeeData.middleName
    );
    cy.get("input[name=lastName]").should(
      "have.value",
      newEmployeeData.lastName
    );
    cy.get("input[name=email]").should("have.value", newEmployeeData.email);
    cy.get("input[name=mobile]").should("have.value", newEmployeeData.mobile);
    cy.get("input[name=address]").should("have.value", newEmployeeData.address);
    cy.get("input[name=weeklyHours]").should(
      "have.value",
      newEmployeeData.weeklyHours.toString()
    );
    cy.get("input[name=contractType]").should(
      "have.value",
      newEmployeeData.contractType
    );
  });

  it("submits the form when add button is clicked", () => {
    cy.get("button[type=submit]").click();
  });
});
