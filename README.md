# 👥 Users List

A frontend application for browsing and managing a list of users, built as a learning project to explore Redux Toolkit with Thunks and more complex form handling.

## ✨ Features

- Browse a list of users fetched from an external API
- Search users by address
- Sort users
- Add a new user via a multi-section form
- Delete a user from the list
- Toast notifications on user actions

## 🛠️ Tech Stack

- **Frontend Framework**: React.js
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **State Management & Data Fetching**: Redux Toolkit (Slices + Thunks)
- **Routing**: React Router
- **HTTP Client**: Axios
- **Notifications**: React-toastify

## 💡 Architecture decisions

### Redux Toolkit + Thunk
Having previously worked with Redux-Saga for side effect management, I wanted to explore a different approach for this project. Saga adds significant complexity (generators, watchers, effects) which is rarely justified for straightforward async data fetching. Thunks are simpler, more readable, and sufficient for this use case. Redux Toolkit itself reduces boilerplate significantly compared to classic Redux.

### State caching
User list is fetched only when the list is empty (`users.length === 0`), preventing redundant API calls on navigation while preserving any locally added users.

### Form handling
This is my first project with a more complex, multi-section form. The form is split into logical fieldsets (basic info, address, company) with controlled inputs managed via `useState`. Form logic is extracted to a custom hook `useAddUserForm` and field configuration to a separate `getFormFields` function to keep the component focused on rendering only.


## 🔮 Planned - v2

The next iteration of this project will introduce a real backend and modernize the data fetching layer:

- **Node.js + Express** backend with a real database
- **TanStack Query (React Query)** replacing Redux Thunks for server state management
- **React Hook Form** for form handling and validation
- Full CRUD operations persisted to the database


## ⚙ Installation

Clone the repository:

```
git clone https://github.com/am97veb/users-list.git
```

Navigate to the project directory:

```
cd users-list
```

Install the dependencies:

```
npm install
```

## 👨🏻‍💻 Usage

Run the development server:

```
npm run dev
```

The application will be available at http://localhost:5173