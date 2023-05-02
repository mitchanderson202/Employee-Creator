import Details from "./Details";

describe("<Details />", () => {
  beforeEach(() => {
    const employee = {
      id: 1,
      firstName: "Mitchell",
      middleName: "Test",
      lastName: "Anderson",
      email: "mitchellanderson202@hotmail.com",
      mobile: "0411111111",
      address: "123 Fake Street",
      weeklyHours: 38,
      contractType: "Full time",
    };
    cy.mount(<Details isOpen={true} onClose={() => {}} employee={employee} />);
  });

  it("Displays correct employee details when not being edited", () => {
    cy.contains("Name: Mitchell Test Anderson");
    cy.contains("Email: mitchellanderson202@hotmail.com");
    cy.contains("Mobile: 0411111111");
    cy.contains("Address: 123 Fake Street");
    cy.contains("Weekly Hours: 38");
    cy.contains("Contract Type: Full-time");
  });

  it("Switches to edit mode when a field is double-clicked", () => {
    const employee = {
      id: 1,
      firstName: "Mitchell",
      middleName: "Test",
      lastName: "Anderson",
      email: "mitchellanderson202@hotmail.com",
      mobile: "0411111111",
      address: "123 Fake Street",
      weeklyHours: 38,
      contractType: "Full time",
    };
    cy.mount(<Details isOpen={true} onClose={() => {}} employee={employee} />);

    cy.get(".Details_Display").dblclick();
    cy.get(".Edit_Details").should("exist");
  });
});
