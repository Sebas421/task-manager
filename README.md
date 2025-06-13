# Task Management Web App

## Author
Sebastian Londono Hurtado

## Description
This is a React-based web application for managing personal task lists and submitting contact information. The app includes full CRUD functionality (create, read, update, delete) for tasks, filter options, and a controlled contact form.

## Features
- Create and delete tasks
- Mark tasks as completed
- Filter by all, completed, or incomplete tasks
- Contact form with First Name, Last Name, Email, and Comments
- Navigation bar for switching between pages
- Responsive layout with side-by-side content

## Live Demo
- [Task Manager App on GitHub Pages](https://sebas421.github.io/task-manager/#/todos)

## GitHub Repository
- [https://github.com/Sebas421/task-manager](https://github.com/Sebas421/task-manager)

## How to Use
1. Go to the **Tasks** page to create, complete, and manage tasks.
2. Use the filter buttons to display all, completed, or incomplete tasks.
3. Go to the **Contact** page to fill and submit the contact form.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- GitHub Pages

## User Stories

- Maria L, wants to keep track of her personal to-do list and be able to filter completed tasks quickly from her phone.
- John M, a small business owner, needs to submit a support message and easily switch between contact and task views.
- Emma T, a student, uses the app to organize daily assignments and remove tasks once completed to stay focused.

## Future Improvements

- Store tasks in localStorage or use a backend API for persistence
- Allow editing existing tasks
- Add due dates and reminders
- Improve the UI with animations and accessibility features
- Validate contact form fields with inline error messages
- Show success confirmation after form submission
- Add login functionality so users can have private task lists

## List Of Components

## Container Components (hold logic and state)

- App: Root component that handles routing (/todos and /contact) and wraps the navigation bar.
- TodoPage: Manages the list of todos, state updates, filters, and passes props to presentational components.
- ContactPage: Wrapper component for displaying the contact form.

## Presentational Components (receive props and focus on UI)

- NavBar: Displays navigation links between "Tasks" and "Contact" views.
- TodoForm: Renders the input field and submit button to add new tasks.
- FilterButtons: Renders the buttons to filter tasks (All, Completed, Incomplete).

TodoList
Displays the list of todos using the TodoItem component.

TodoItem
Displays a single todo with ability to mark as completed or delete.

ContactForm
Controlled component that handles the contact form fields and submission.
## State Tree

```js
{
  todos: [
    { id: 1, text: "Example task", completed: false }
  ],
  filter: "all", // all | completed | incomplete
  contactForm: {
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  }
}
