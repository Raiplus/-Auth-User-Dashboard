# Auth-User-Dashboard  

A **user authentication and dashboard system** built using **Node.js, Express.js, MongoDB, and EJS**.  
This project includes **user registration, login, token-based authentication, and a simple user dashboard**.

---

## ✨ Features  
✅ User Sign-up & Login  
✅ Secure Password Hashing with bcrypt  
✅ Token-based Authentication  
✅ User Dashboard  
✅ MongoDB Database Integration  
✅ Error Handling & Validation  
✅ Deployed on Render
## 🌐 Live Demo / Showcase

Check out the live version of this project here:  
[Auth-User-Dashboard Live](https://auth-user-dashboard.onrender.com)

Feel free to explore the signup, login, and dashboard features in action!


---

## 📌 Technologies Used  
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **View Engine**: EJS  

---

# Auth-User-Dashboard

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Raiplus/Auth-User-Dashboard.git
cd Auth-User-Dashboard
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=mongodb://localhost:27017/auth-dashboard
PORT=3000
```

### 4️⃣ Run the application

```sh
npm start
```

### 5️⃣ Open in browser

```sh
http://localhost:3000
```

---

## 📂 Folder Structure

```sh
📦 Auth-User-Dashboard  
├── 📂 views/               # EJS Views (Frontend Templates)  
│   ├── index.html          # Landing Page  
│   ├── login.html          # Login Page  
│   ├── sign_up.html        # Signup Page  
│   ├── UserDashboard.ejs   # User Dashboard  
├── 📂 public/              # Static Assets (CSS, JS, Images)  
├── 📂 models/              # Database Models  
│   ├── User.js             # User Model  
├── 📂 routes/              # Express Routes  
├── main.js                 # Main Backend File  
├── package.json            # Project Configuration  
├── README.md               # Project Documentation  

```

## ☁️ Deployment on Render

### 1️⃣ Connect GitHub repo

- Go to [Render](https://render.com) and create a new **Web Service**.  
- Connect your GitHub repository (`Raiplus/Auth-User-Dashboard`).

### 2️⃣ Configure build and start commands

- **Build Command:** `npm install`  
- **Start Command:** `npm start`

### 3️⃣ Set environment variables

- Add `MONGO_URI` with your MongoDB connection string.  
- Add `PORT` (optional, Render assigns automatically if omitted).

### 4️⃣ Deploy

- Click **Create Web Service**.  
- Render will build and deploy your app.  
- Your app will be live on the provided Render URL.


## 📜 License

This project is open-source and available under the MIT License.

---

## 🎯 Contributing

Want to improve this project?

1️⃣ Fork the repository\
2️⃣ Create a new branch\
3️⃣ Make your changes\
4️⃣ Submit a pull request

🙌 **Happy Coding! 🚀**

