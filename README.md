# Expense Tracker

This is a simple Expense Tracker application built with a React frontend and a Spring Boot backend. The application allows users to create, read, update, and delete expenses, as well as view the total spend.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Application Properties](#application-properties)
- [License](#license)

## Features
- Add new expenses
- Edit existing expenses
- Delete expenses
- View a list of all expenses
- View the total spend

## Technologies Used
- Frontend: React
- Backend: Spring Boot
- Toast Notifications: react-toastify

## Setup and Installation

### Backend (Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd expense-tracker/expense-tracker-backend
    ```
3. Build the project using Maven:
    ```bash
    mvn clean install
    ```
4. Run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```

### Frontend (React)
1. Navigate to the frontend directory:
    ```bash
    cd expense-tracker/expense-tracker-frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm start
    ```

## Usage
1. Open your web browser and go to `http://localhost:5173`.
2. Log in using the hardcoded username=username and password=password
3. Use the application to manage your expenses:
   - Add new expenses by entering the amount and description and clicking "Add Expense".
   - Edit an expense by clicking the "Edit" button next to it, modifying the details, and clicking "Update Expense".
   - Delete an expense by clicking the "Delete" button next to it.
   - View the total spend displayed on the page.

## API Endpoints
- `GET /expenses` - Retrieve all expenses
- `GET /expense/{id}` - Retrieve an expense (End Point not in use )
- `GET /expense/total` - Retrieve the total spend
- `POST /expense` - Add a new expense
- `PATCH /expense/{id}` - Update an existing expense
- `DELETE /expense/{id}` - Delete an expense

## Application Properties
Configure the following properties in `src/main/resources/application.properties`:

```properties
spring.application.name=expense-tracker

# DataSource Settings MySQL
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=2626

# Hibernate Settings
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update




