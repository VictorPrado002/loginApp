# Login App React

A React application that demonstrates user authentication and user management while showcasing modern React concepts such as **Custom Hooks**, **Context API**, **useReducer**, and **React Router**.

##  Features

- User authentication (Login)
- User registration
- Create new users in Admin Role
- Edit existing users
- Delete users
- Protected routes
- Global state management with Context API
- Complex state management using useReducer
- Reusable logic through Custom Hooks

##  Technologies

- React
- Vite
- React Router DOM
- Context API
- useReducer
- Custom Hooks
- JavaScript (ES6+)
- CSS

##  React Concepts Demonstrated

This project was built to practice and demonstrate the following React concepts:

- **useState** for local component state
- **useEffect** for side effects
- **useContext** for global state management
- **useReducer** for predictable state updates
- **Custom Hooks** for reusable business logic
- **React Router** for navigation and protected routes
- Component composition
- Props drilling vs Context API

##  Project Structure

```text
src/
│
├── auth/          # Authentication pages and components
├── components/    # Reusable UI components
├── context/       # Context providers
├── hooks/         # Custom Hooks
├── pages/         # Main application pages
├── reducers/      # Reducers
├── routes/        # Application routing
└── services/      # API requests (if applicable)
```

##  Getting Started

### Clone the repository

```bash
git clone https://github.com/VictorPrado002/loginApp.git
```

### Navigate to the project

```bash
cd loginApp
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

##  Architecture

The application follows a simple architecture where business logic is separated from the UI.

```text
UI Components
      │
      ▼
Custom Hooks
      │
      ▼
Context API
      │
      ▼
useReducer
      │
      ▼
Application State
```

This approach keeps components clean, promotes code reuse, and centralizes state management.

##  Purpose

This project was created as a learning exercise to strengthen my understanding of modern React development, focusing on:

- Global state management
- Context API
- Reducer pattern
- Custom Hooks
- React Router
- Component architecture
- Clean and maintainable code

## Future Improvements

- Backend integration
- JWT authentication
- Role-based authorization
- Unit testing with Jest and React Testing Library
- Form validation with React Hook Form
- API integration with Axios
- Responsive UI improvements

## Author

**Victor Hugo Jiménez Prado**

Computer Systems Engineer passionate about software development, web technologies, and continuous learning.

Feel free to explore the project, provide feedback, or contribute.
