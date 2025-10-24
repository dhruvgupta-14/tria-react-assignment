#  Contact Management App

A modern, responsive contact management web application built with **React** and **Tailwind CSS**.  
It allows users to view, search, and add contacts seamlessly — integrating both API-fetched and manually added contacts stored locally in the browser.

Dummy API used-https://randomuser.me/
**Live Demo:** [https://your-app-name.vercel.app]

### Features
- 🔍 Search and filter contacts by name.
- ➕ Add new contacts via a modal form.
- 💾 Automatically saves added contacts using `localStorage`.
- 🌐 Fetches random users from `randomuser.me` API.
- 💫 Smooth animations and responsive design using Tailwind CSS.
- 🌙 Beautiful modern UI with consistent theme mentioned in inddex.css with animated cards and hover effects.
- 🌙 Add Dark Mode Also.

### Tech Stack
- **Frontend:** React 
- **Styling:** Tailwind CSS
- **Animations:** Tailwind Animations ,Custom Animination in Tailwing Css
- **Icons:** React Icons
- **Data Fetching:** Axios
- **Hosting:** Vercel
- **External Packages:** Axios(for data fecthing),React-Icons,react-simple-typewriter(for typewriting effect)
### Folder Structure
src/
 ├── components/        # Reusable UI components (Header, Hero, ContactCard, etc.)
 ├── context/           # React Context for managing contact state
 ├── assets/            # Images, icons, etc.
 ├── App.jsx            # Main application
 └── index.jsx          # Entry point


### Setup Instructions

1. **Clone the repository**
   git clone https://github.com/dhruvgupta-14/tria-react-assignment
   cd tria-react-assignment
   npm install
   npm run dev

### Assumptions & Design Choices
- The app fetches a limited number of contacts (default 10) from the Random User API for demonstration.
- Manually added contacts are stored in `localStorage` to persist between sessions.
- Responsive layouts are implemented for all screen sizes using Tailwind’s grid and flex utilities.
- Animations are subtle to enhance UX but avoid distraction.
- The app does not require backend or authentication for simplicity.

### Author
**Dhruv Gupta**  
📧 Email: [dhruvpahariya692@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/dhruv-gupta-9285692a2/)


