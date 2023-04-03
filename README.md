# Employee Creator

## Demo & Snippets

- Include hosted link
- Include images of app if CLI or Client App

---

## Requirements

- Full stack CRUD app that displays Employees. The user should be able to add, edit and delete.

Stack:

- Spring Boot (Java)
- MySQL
- React w/ Redux
- TypeScript
- SCSS

---

## Build Steps

1. Initialise MySql database:
   CREATE DATABASE employee_creator

2. Spring Boot Application Properties:
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_creator
   spring.datasource.username=<USERNAME>
   spring.datasource.password=<YOUR_USERNAME_PASSWORD>
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.generate-ddl=true

3. Run the application using IDE of choice.
4. cd EC-FrontEnd
5. npm i
6. npm run dev

---

## Design Goals

- A simple design with a homepage explaining what the app did and how it worked.
- Once inside I just wanted to present a list of Employees with a Button to see more details or Delete.
- Add Employees at the top.
- All pop ups are Modals.

---

## Known issues

- The Form Data doesn't force any specific things except required fields and using @ for the email field, this is mainly because I didn't to force anyone to put in real/sensitive data.
- No back button or Home Page button to get back to the HomePage. I think it's unnecessary for this project at the moment.

---
