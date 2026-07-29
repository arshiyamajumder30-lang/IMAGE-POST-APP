# 📸 MERN Image Post App

A full-stack MERN application that allows users to upload images with captions and view all uploaded posts. Images are stored using **ImageKit**, while post information is stored in **MongoDB**.

---

## 🚀 Features

- Upload images
- Add captions to posts
- Store images using ImageKit
- Save post data in MongoDB
- View all uploaded posts
- Responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

---

## 📂 Project Structure

```
image-post-app/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── App.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

## 📄 Pages

### Create Post

- Select an image
- Enter a caption
- Submit the form
- Image is uploaded to ImageKit
- Post details are saved in MongoDB

### Feed

- Displays all uploaded posts
- Shows the uploaded image and its caption
- Retrieves data from the backend using Axios

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

PORT=3000
```

---

## 📡 API Endpoints

### Create Post

```
POST /api/posts
```

Uploads an image to ImageKit and stores the post in MongoDB.

### Get All Posts

```
GET /api/posts
```

Returns all uploaded posts.

---

## 📸 Screenshots

### Create Post
- Upload an image
- Add a caption
- Submit the post

### Feed
- Displays all uploaded posts
- Shows images and captions

---

## 🔮 Future Improvements

- User Authentication
- Like and Comment functionality
- Edit/Delete posts
- Search posts
- Pagination
- Responsive enhancements

---

## 👩‍💻 Author

**Arshiya Majumder**

Built as a full-stack MERN project using React, Node.js, Express.js, MongoDB, and ImageKit for image storage.
