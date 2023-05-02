import Button from "./Button";

describe("<Button />", () => {
  it("renders a button with the given text", () => {
    const buttonText = "Click me!";
    cy.mount(<Button data={buttonText} />);
    cy.get(".Button").should("be.visible").contains(buttonText);
  });
});
