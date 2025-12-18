Crowd Management UI

This project is a Crowd Management Dashboard UI built as part of the Kloudspot UI Engineer hiring assignment.
The application follows the provided Figma designs, integrates REST APIs, and uses WebSocket-based alerts as specified in the requirements.

Features Implemented
Authentication (Login)

Login screen designed exactly as per Figma

Password visibility toggle (eye icon)

Login API integration using /auth/login

Token stored in localStorage

Protected routes using ProtectedRoute

Redirects to Dashboard after successful login

Note: Backend handles authentication. UI does not mock login data.

Dashboard

Summary cards

Occupancy charts

Demographics pie chart

Layout matches Figma design

Crowd Entries

Paginated table layout

API integration for crowd entries

Pagination styled exactly like Figma (< 1 2 3 4 5 >)

Handles empty states gracefully

Alerts Panel (WebSocket)

Real-time alerts using WebSocket

Slide-in alerts panel from the right

Close (✕) button implemented as per Figma

No mock data used

Works even if backend is not fully ready

Tech Stack

React + Vite

JavaScript

Axios

WebSocket

CSS (No UI libraries used)

React Router

Project Structure
src/
     api/
        analytics.api.js
        auth.api.js
        crowdEntries.api.js 
    assets/
        office.png
    components/
        AlertsPanel.jsx
        CrowdEntriesTable.jsx
        Navbar.jsx
        Sidebar.jsx
        Pagination.jsx
        SummaryCard.jsx
        Charts (Pie, Occupancy)
    hooks/
        useAlertsSocket.js
        useAuth.js
    layouts/
        DashboardLayout.jsx
    pages/
        Login.jsx
        Dashboard.jsx
        CrowdEntries.jsx
    routes/
        ProtectedRoute.jsx
    services/
        axios.js
        socket.js
    styles/
        dashboard.css
        login.css
        pagination.css
        sidebar.css
        global.css
    utils/
        formatTime.js
        formatDuration.js
     App.jsx
    main.jsx
    index.css

API Integration
Login API
POST /auth/login


Used in:

src/api/auth.api.js

src/pages/Login.jsx

Crowd Entries API
POST /entries/list


Used in:

src/api/crowdEntries.api.js

src/pages/CrowdEntries.jsx

Alerts (WebSocket)

Implemented using WebSocket

Hook: useAlertsSocket.js

Socket configuration: services/socket.js

UI: AlertsPanel.jsx

How to Run the Project
npm install
npm run dev


Then open:

http://localhost:5174

Notes

WebSocket is used for alerts as per requirement

UI strictly follows Figma design

Code is modular, reusable, and scalable

Assignment Status

✔ All required screens implemented
✔ APIs integrated
✔ WebSocket alerts implemented
✔ Figma design matched
✔ Pagination behavior correct

Author

Anil Kumar K
UI Engineer – Assignment Submission