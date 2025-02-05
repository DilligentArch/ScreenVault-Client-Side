![Screenshot 2025-02-04 033945](https://github.com/user-attachments/assets/a683e1ee-c8fe-40e7-9086-fabcaa0ffdd9)

# **🎬 ScreenVault - Your Ultimate Movie Hub**  

ScreenVault is your go-to **movie tracking platform**, allowing you to **discover, rate, and save your favorite movies**. With an intuitive interface, you can explore trending films, rate them, and build your personalized watchlist—all in one place!

## 🌐 **Live Demo**
🔗 [Live Site - ScreenVault](https://fprojects-23221.web.app/)  

---



## 🚀 **Features**
### 🔍 **Discover & Explore**
- **Browse Top-Rated Movies**: Explore a curated collection of top-rated films.
- **Movie Details**: Get insights like **plot, release year, genre, and rating**.

### ⭐ **User Engagement**
- **Rating System**: Rate movies from **1 to 5 stars** and help others find great content.
- **Favorite Movies List**: Save movies to your **favorites** for easy access.

### 🔑 **Authentication & User Management**
- **User Registration & Login**: Secure user authentication using Firebase.
- **Personalized Experience**: Save and manage your favorite movies.

### 📱 **Responsive & Interactive UI**
- **Smooth Animations**: Uses AOS (Animate On Scroll) for **engaging transitions**.
- **Mobile-Friendly**: Works seamlessly on all devices.

---

## 🛠 **Tech Stack**
### **Frontend**
- **React.js** - Component-based UI development.
- **React Router** - Client-side routing.
- **Tailwind CSS** - Utility-first CSS for a responsive and modern design.
- **AOS (Animate On Scroll)** - Adds smooth animations.

### **Backend**
- **Node.js** - JavaScript runtime for backend logic.
- **Express.js** - Server-side framework for handling API requests.

### **Database**
- **MongoDB** - NoSQL database for storing **movies & user data**.

### **Deployment**
- **Frontend**: Hosted on **Firebase**.
- **Backend**: Hosted on **Vercel**.

---

## ⚙️ **Installation**
### **Prerequisites**
- Install **Node.js** (`v16+` recommended).
- MongoDB instance (local or cloud-based).
- Firebase project setup for authentication.

### **Setup Steps**
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/DilligentArch/ScreenVault-Client-Side.git
   cd screenvault
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the required variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     FIREBASE_API_KEY=your_firebase_api_key
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Development Server**:
   ```sh
   npm run dev
   ```

---

## ▶️ **Usage**
- **Start the Frontend**:
  ```sh
  npm run dev
  ```
- **Run the Backend** (if applicable):
  ```sh
  node server.js
  ```
- Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 **Configuration**
- **Firebase Authentication**: Ensure Firebase authentication is set up correctly.
- **MongoDB Connection**: Verify the database connection string in `.env`.
- **Environment Variables**: API keys and secrets must be properly configured.

---

## 📦 **Dependencies**
### **Frontend**
- `react`, `react-router-dom`
- `axios`, `react-hot-toast`
- `react-icons`, `swiper`
- `react-hook-form`, `localforage`
- `sweetalert2`, `aos`
- `react-simple-star-rating`, `match-sorter`

### **Backend**
- `express`, `cors`, `dotenv`
- `mongodb`

### **Dev Dependencies**
- `eslint`, `eslint-plugin-react`
- `tailwindcss`, `vite`, `daisyui`

---

## 🛠 **Troubleshooting**
### 🔹 **Common Issues & Fixes**
1. **Server Not Starting?**
   - Ensure MongoDB is running.
   - Check `.env` file configuration.

2. **Authentication Issues?**
   - Verify Firebase API keys.
   - Ensure Firebase authentication methods are enabled.

3. **Database Not Connecting?**
   - Check the MongoDB connection string.

4. **Frontend Not Loading?**
   - Run `npm run dev` in the frontend directory.

---

## 🤝 **Contribution Guidelines**
We welcome contributions! To contribute:
1. **Fork the repository**.
2. **Create a feature branch** (`feature/new-feature`).
3. **Commit changes** (`git commit -m "Added new feature"`).
4. **Push to GitHub** and open a **Pull Request**.

---



## 👤 **Author & Acknowledgments**
👨‍💻 Developed by **[Nayeb Ahmed Qureshi(https://github.com/DilligentArch)**.  


---

### 🎥 **Happy Movie Tracking!** 🍿✨
```
