# AI Resume Analyzer

An intelligent web application that analyzes resumes using Google's Gemini AI. Upload your resume (PDF or TXT) or paste resume text, and get AI-powered insights including extracted name, skills, professional summary, and suggested job roles.

## Project Overview

**AI Resume Analyzer** is a full-stack application designed to help job seekers and recruiters analyze resumes efficiently. The application uses:

- **Google Gemini 2.5 Pro API** for intelligent resume analysis
- **React + Vite** for a fast, modern frontend
- **Node.js + Express** for the backend server
- **MongoDB** for data persistence
- **PDF.js** for PDF text extraction

### Key Features

Upload PDF or TXT resume files  
Paste resume text directly  
AI-powered analysis using Gemini API  
Extract candidate name, skills, and summary  
Get suggested job roles based on resume content  
Store results in MongoDB  
Responsive and user-friendly UI  
Production-ready deployment (Vercel + Render)

---

## Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Axios 1.13.2** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **Mongoose 9.0.0** - MongoDB ODM
- **PDF.js (pdfjs-dist 5.4.449)** - PDF text extraction
- **Google Generative AI SDK 0.24.1** - Gemini API integration
- **Multer 2.0.2** - File upload handling
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **dotenv 17.2.3** - Environment variable management

### Database
- **MongoDB Atlas** - Cloud database service

### APIs
- **Google Gemini 2.5 Pro API** - AI model for resume analysis

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)
- **Google Gemini API Key** - [Get API Key](https://makersuite.google.com/app/apikey)

---

## Local Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/PankajPal78/AI_Resume_Analyzer_Frontend.git
cd AI_Resume_Analyzer_Frontend
```

### Step 2: Backend Setup

#### 2.1 Navigate to backend directory
```bash
cd backend
```

#### 2.2 Install dependencies
```bash
npm install
```

#### 2.3 Create `.env` file
```bash
# Copy the .env.sample to .env
cp .env.sample .env

# Or create .env manually with the content below
```

#### 2.4 Add your environment variables to `.env`
```env
PORT=4000
MONGO_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

#### 2.5 Start the backend server
```bash
npm run dev
```

Backend should now be running at: **http://localhost:4000**

**Verify it's working:**
```bash
curl http://localhost:4000/health
# Should return: {"status": Backend is running"}
```

### Step 3: Frontend Setup

#### 3.1 Open a new terminal and navigate to frontend directory
```bash
cd resume-frontend
```

#### 3.2 Install dependencies
```bash
npm install
```

#### 3.3 Create `.env.local` file
```bash
# Create .env.local file in the resume-frontend directory
touch .env.local
```

#### 3.4 Add environment variable to `.env.local`
```env
VITE_API_URL=http://localhost:4000
```

#### 3.5 Start the frontend development server
```bash
npm run dev
```

Frontend should now be running at: **http://localhost:5173**

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

You should see the **AI Resume Analyzer** interface. 🎉

---

## Environment Variables Guide

### Backend `.env` File

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGO_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/resume_db?retryWrites=true&w=majority

# AI API
GEMINI_API_KEY=your_google_gemini_api_key_here

# CORS (Optional, for production)
FRONTEND_URL=http://localhost:5173
```

### Frontend `.env.local` File

Create a `.env.local` file in the `resume-frontend/` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:4000
```

### `.env.sample` Template

**Backend** (`backend/.env.sample`):
```env
# Server
PORT=4000
NODE_ENV=development

# MongoDB
MONGO_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name?retryWrites=true&w=majority

# Gemini AI
GEMINI_API_KEY=your_api_key_here

# CORS
FRONTEND_URL=http://localhost:5173
```

**Frontend** (`resume-frontend/.env.sample`):
```env
VITE_API_URL=http://localhost:4000
```

---

## Getting API Keys & Database Connection

### MongoDB Atlas Connection String

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Click "Connect" → "Drivers"
4. Copy the connection string
5. Replace `<password>` with your password
6. Example:
   ```
   mongodb+srv://user:pass@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
   ```

### Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated key
4. Add it to your `.env` file as `GEMINI_API_KEY`

---

## Project Structure

```
AI_Resume_Analyzer_Frontend/
│
├── backend/
│   ├── models/
│   │   └── Resume.js          # MongoDB Resume schema
│   ├── ai.js                  # Gemini API integration
│   ├── server.js              # Express server
│   ├── package.json
│   ├── .env.sample
│   └── ...
│
├── resume-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadForm.jsx     # File upload form
│   │   │   └── ResultCard.jsx     # Results display
│   │   ├── App.jsx                # Main app component
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.local
│   └── ...
│
└── README.md
```

---

## Testing the Application

### Test with Sample Resume

Use this sample resume text to test:

```
John Doe
Software Engineer with 5+ years of experience

SKILLS:
- JavaScript, React, Node.js
- MongoDB, PostgreSQL
- AWS, Docker, Kubernetes
- REST APIs, GraphQL

EXPERIENCE:
Senior Developer at TechCorp (2021-Present)
- Led a team of 5 developers
- Developed microservices using Node.js
- Improved performance by 40%

Developer at StartupXYZ (2019-2021)
- Built React frontend for mobile app
- Implemented CI/CD pipelines
```

1. Open the frontend at http://localhost:5173
2. Click "Paste Resume Text"
3. Paste the above text
4. Click "Analyze Resume"
5. See the AI-powered analysis! 

---

## Troubleshooting

### Backend won't start
```bash
# Check if port 4000 is in use
lsof -i :4000  # On macOS/Linux
netstat -ano | findstr :4000  # On Windows

# Kill the process or change PORT in .env
```

### MongoDB connection error
- Verify connection string in `.env`
- Check MongoDB Atlas IP whitelist
- Ensure password doesn't contain special characters (or URL encode them)

### Gemini API error
- Verify API key is correct
- Check if API key has sufficient quota
- Ensure Gemini API is enabled in Google Cloud

### CORS error on frontend
- Verify `VITE_API_URL` in frontend `.env.local`
- Check backend CORS configuration
- Ensure both frontend and backend are running

### File upload not working
- Check file size (should be < 5MB)
- Verify file format (PDF or TXT)
- Check backend `uploads/` folder permissions

---

## Build for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd resume-frontend
npm run build
npm run preview
```

---

## Deployment

### Deploy Frontend to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add `VITE_API_URL` environment variable
5. Deploy!

### Deploy Backend to Render

1. Push code to GitHub
2. Visit [render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repo
5. Add environment variables (MONGO_URL, GEMINI_API_KEY, FRONTEND_URL)
6. Deploy!

See the [Deployment Guide](./DEPLOYMENT.md) for detailed instructions.

---

## Available Scripts

### Backend

```bash
npm start          # Run production server
npm run dev        # Run development server with nodemon
npm install        # Install dependencies
```

### Frontend

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm install        # Install dependencies
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## Author

**Pankaj Pal**
- GitHub: [@PankajPal78](https://github.com/PankajPal78)

---

## Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review environment variable setup
3. Check browser console for errors
4. Check backend logs
5. Open an issue on GitHub

---

## Acknowledgments

- [Google Gemini API](https://ai.google.dev/) for AI capabilities
- [MongoDB](https://www.mongodb.com/) for the database
- [Vercel](https://vercel.com/) and [Render](https://render.com/) for hosting
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) communities

---

## Resources

- [Google Generative AI Documentation](https://ai.google.dev/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Happy Resume Analyzing!**
