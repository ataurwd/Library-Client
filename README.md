# Book Shop - Frontend

This is the frontend of the Book Shop application. It is built using React.js and styled with Tailwind CSS, providing a responsive and user-friendly interface for users to explore, borrow, and manage books.

## Features
- **User Authentication**: Email-password-based authentication and social login.
- **Book Categories**: Browse books by categories.
- **Book Details**: View detailed information about each book.
- **Borrow Books**: Borrow books with real-time updates to inventory.
- **Protected Routes**: Access control for authenticated users.
- **Dynamic Title**: Route-based dynamic page titles.
- **Responsive Design**: Fully optimized for different screen sizes.

## Technologies Used
- React.js
- Tailwind CSS
- Axios
- React Router
- Firebase Authentication
- SweetAlert2 (for notifications)
- React-Query (optional for state management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10a11-client-side-ataurwd.git
   cd frontend-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and configure the following environment variables:
   ```env
   REACT_APP_API_URL=<Your Backend API URL>
   REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts
- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.

## Folder Structure
```
src/
├── components/
├── pages/
├── context/
├── hooks/
├── styles/
├── App.js
├── index.js
```

## Deployment
The app is hosted on Firebase Hosting. To deploy:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## License
This project is licensed under the MIT License.