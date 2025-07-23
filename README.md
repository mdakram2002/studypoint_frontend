## StudyPoint Education Platform
- StudyPoint is a full-stack education technology (ed-tech) platform built using the MERN stack, structured with the MVC architecture. It enables students to browse, enroll in, and review online courses, while allowing instructors to create and manage rich course content. The platform supports full user authentication, modular course management, real-time progress tracking, and secure online payments — offering a seamless digital learning experience for both learners and educators.

+ Backend Overview
- The backend is structured using Node.js, Express, and MongoDB, following MVC principles with well-defined routes, controllers, models, middleware, and utilities.

+ Frontend Overview
- Built using React.js for the UI and Tailwind CSS for modern styling. Integrated with backend APIs using the Fetch API (built-in browser API), ensuring a smooth and dynamic user experience. Handles authentication, course catalog, payment flow, and profile management from the client side. Deployed using CI/CD pipeline via GitHub Actions to Vercel, ensuring automated testing and seamless delivery of frontend updates. Features responsive design and optimized components for performance and accessibility.

# Project Root
- ├── client (Frontend)
- │   ├── build
- │   ├── node_modules
- │   ├── public
- │   ├── src
- │   │   ├── Assets
- │   │   ├── components
- │   │   │   ├── common
- │   │   │   │   ├── Confirmation.jsx
- │   │   │   │   ├── Footer.jsx
- │   │   │   │   ├── IconButton.jsx
- │   │   │   │   ├── Navbar.jsx
- │   │   │   │   ├── RatingStars.jsx
- │   │   │   │   ├── ReviewSlider.jsx
- │   │   │   │   └── Tab.jsx
- │   │   │   ├── ContactPage
- │   │   │   │   ├── ContactData.jsx
- │   │   │   │   ├── ContactFor.jsx
- │   │   │   │   └── ContactUsForm.jsx
- │   │   │   └── core
- │   │   │       ├── AboutPage
- │   │   │       │   ├── ContactFor.jsx
- │   │   │       │   ├── LearningGi.jsx
- │   │   │       │   ├── Quote.jsx
- │   │   │       │   └── StatsComp.jsx
- │   │   │       ├── Auth
- │   │   │       │   ├── LoginForm.jsx
- │   │   │       │   ├── OpenRoute.jsx
- │   │   │       │   ├── PrivateRoute.jsx
- │   │   │       │   └── ProfileDro.jsx
- │   │   │       ├── Catalog
- │   │   │       ├── Course
- │   │   │       ├── Dashboard
- │   │   │       ├── HomePage
- │   │   │       └── ViewCourses
- │   │   ├── data
- │   │   ├── hooks
- │   │   ├── pages
- │   │   │   ├── About.jsx
- │   │   │   ├── Catalog.jsx
- │   │   │   ├── Contact.jsx
- │   │   │   ├── CourseDetails.jsx
- │   │   │   ├── Dashboard.jsx
- │   │   │   ├── Error.jsx
- │   │   │   ├── ForgotPasswo.jsx
- │   │   │   ├── Home.jsx
- │   │   │   ├── Login.jsx
- │   │   │   ├── Signup.jsx
- │   │   │   ├── UpdatePassw.jsx
- │   │   │   ├── VerifyEmail.jsx
- │   │   │   └── ViewCourses.jsx
- │   │   ├── reducer
- │   │   │   └── Index.jsx
- │   │   ├── services
- │   │   │   ├── operations
- │   │   │   │   ├── apiConnector.jsx
- │   │   │   │   ├── apis.jsx
- │   │   │   │   └── studentFeatur.jsx
- │   │   │   └── slices
- │   │   │       ├── authSlice.jsx
- │   │   │       ├── cartSlice.jsx
- │   │   │       ├── courseSlice.jsx
- │   │   │       ├── profileSlice.jsx
- │   │   │       └── viewCourseSli.jsx
- │   │   ├── utils
- │   │   │   └── api.js
- │   │   ├── App.css
- │   │   ├── App.jsx
- │   │   ├── index.css
- │   │   └── index.jsx
- │   ├── .env
- │   ├── .gitignore
- │   ├── package-lock.json
- │   ├── package.json
- │   ├── README.md
- │   ├── tailwind.config.js
- │   ├── web.config
- │   └── webpack.config.js
- └── server (Backend)
- ├── config
- │   ├── cloudinary.js
- │   ├── database.js
- │   └── razorpay.js
- ├── controllers
- │   ├── files
- │   ├── Auth.js
- │   ├── Category.js
- │   ├── ContactUs.js
- │   ├── Course.js
- │   ├── CourseProgrss.js
- │   ├── Payments.js
- │   ├── Profile.js
- │   ├── RatingAndRevi.js
- │   ├── ResetPassword.js
- │   ├── Section.js
- │   └── SubSection.js
- ├── email\templates
- │   ├── courseEnrollEmail.js
- │   ├── emailVerification.js
- │   ├── passwordUpdate.js
- │   └── PaymentSuccess.js
- ├── middlewares
- │   └── auth.js
- ├── models
- │   ├── category.js
- │   ├── ContactUs.js
- │   ├── Course.js
- │   ├── CourseProgres.js
- │   ├── OTP.js
- │   ├── Profile.js
- │   └── User.js
- ├── node_modules
- ├── routes
- │   ├── ContactUs.js
- │   ├── Course.js
- │   ├── Payments.js
- │   ├── Profile.js
- │   └── User.js
- ├── utils
- │   ├── imageUploader.js
- │   ├── mailSender.js
- │   ├── SecToDuration.js
- │   └── validation.js
- ├── .env
- ├── .gitignore
- ├── index.js
- ├── package-lock.json
- └── package.json


## FRONTEND ##
- Built using React.js and Tailwind CSS for UI. Interacts with backend APIs via the Fetch API. Deployed to Vercel via GitHub Actions CI/CD.

+ 🔒 Authentication (Client-Side Handling)
- Manages user input for signup/login forms. Sends credentials to the backend for verification. Stores and manages JWT tokens (e.g., in local storage or context) for session persistence. Redirects users based on authentication status using OpenRoute and PrivateRoute. Handles profile dropdown display (ProfileDro.jsx).

+ 🎓 Course Management (Client-Side Rendering & Interaction)
- Renders course listings (Catalog components). Facilitates course creation forms for instructors (data input). Displays course details (CourseDetails.jsx). Handles user interactions like course enrollment.

+ 🔁 Password Reset (Client-Side Forms & Flow)
- Presents "Forgot Password" form (ForgotPasswo.jsx) to capture email. Handles OTP input and verification (VerifyEmail.jsx). Provides "Update Password" form (UpdatePassw.jsx) for new password submission.

+ 🗂️ Category Management (Client-Side Display)
- Displays available categories. Filters and renders courses based on selected categories (Catalog.jsx). Presents detailed category pages (Category Page Details are consumed and rendered here).

+ 💳 Payment Integration (Client-Side Payment Flow)
- Initiates payment flow by sending course and user data to the backend. Integrates with Razorpay's frontend SDK for secure payment collection. Confirms payment status and updates UI.

+ 📚 Sections and SubSections (Client-Side Content Display & Interaction)
- Renders course sections and subsections (ViewCourses.jsx, CourseDetails.jsx). Handles UI for creating, updating, and deleting sections/subsections by sending data to backend. Displays video content and lecture details.

+ 👤 Profile Management (Client-Side UI & Data Display)
- Provides user interface for viewing and editing profile details (Dashboard.jsx). Sends updated profile data to the backend. Displays user-specific information.

+ ⭐ Rating & Review System (Client-Side Input & Display)
- Offers forms for users to submit ratings and reviews. Displays average ratings and all reviews for courses. Validates user eligibility for reviews (e.g., enrolled status).

+ 📬 Contact Us Feature (Client-Side Form Submission)
- Presents a contact form (ContactUsForm.jsx). Captures user input (name, email, message). Submits query data to the backend API. Provides feedback to the user upon successful submission.

+ 📦 Utilities (Frontend Helpers)
- apiConnector.jsx: Manages base API URLs and common request configurations.
- apis.jsx: Defines API endpoints for easy access.
- studentFeatur.jsx: Contains functions for student-specific operations (e.g., course enrollment, payment initiation).
- api.js: General-purpose utility for making Fetch API calls.

+ 📧 State Management (Redux Slices)
- authSlice.jsx: Manages authentication state (user login status, token).
- cartSlice.jsx: Handles shopping cart state (items, total).
- courseSlice.jsx: Manages course-related data (listings, selected course).
- profileSlice.jsx: Stores and updates user profile information.
- viewCourseSli.jsx: Manages state related to viewing specific course content (progress, active section/subsection).

+ 🔄 Deployment (CI/CD)
- CI/CD Pipeline: Configured via GitHub Actions for automatic build and deploy.
- Deployment: Frontend deployed to Vercel and connected with backend hosted vercel.
- Ensures zero-downtime deployment and quick delivery of updates.

+ Prerequisites
- Node.js (LTS version recommended)
- npm (Node Package Manager) or Yarn
- MongoDB instance (local or cloud-hosted)
- Cloudinary account (for image/video uploads)
- Razorpay account (for payment integration)

# Setup Steps
Clone the Repository:

Bash

git clone https://github.com/mdakram2002/study_point
cd StudyPoint
Backend Setup:

Navigate to the server directory:

Bash

cd server
Install backend dependencies:

Bash

npm install
# OR
yarn install
Create a .env file in the server directory and add your environment variables (e.g., MongoDB URI, JWT secret, Cloudinary credentials, Razorpay keys, Nodemailer configuration). Refer to your backend code for required variables.

Start the backend server:

Bash

npm start
# OR if you have nodemon installed globally for development:
nodemon index.js
The backend will typically run on http://localhost:4000 (or your configured port).

Frontend Setup:

Open a new terminal and navigate to the client directory:

Bash

cd ../client
Install frontend dependencies:

Bash

npm install
# OR
yarn install
Create a .env file in the client directory and add any necessary frontend environment variables (e.g., REACT_APP_BASE_URL pointing to your backend API).

Start the frontend development server:

Bash
