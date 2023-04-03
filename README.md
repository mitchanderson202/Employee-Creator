# Employee Creator

## Demo & Snippets

<img width="1239" alt="Homepage" src="https://user-images.githubusercontent.com/78459081/229411743-b6848744-b05a-493e-8634-8ce451666c24.png">
<img width="1088" alt="Employees-Page" src="https://user-images.githubusercontent.com/78459081/229411750-ae12e074-7de5-4be1-b4b2-aedecb4db85b.png">
<img width="767" alt="Add-Employee" src="https://user-images.githubusercontent.com/78459081/229411773-2aeebfa6-5146-420c-8921-01a86e61adef.png">
<img width="766" alt="Employee-Details" src="https://user-images.githubusercontent.com/78459081/229411789-f2075813-12bc-411f-9981-fda584499f63.png">
<img width="763" alt="Edit-Details" src="https://user-images.githubusercontent.com/78459081/229411793-51551b78-8236-44af-b108-2cc8d56f4acd.png">

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
