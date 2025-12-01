# Word Guessing Game (Mobil Game with CAPACITOR)

## 📌 About the Project
This project is a mobile game where users try to guess the correct word by filling in the missing letters. It has been integrated into mobile platforms using **Capacitor and Android Studio**.

## 🚀 Features
- 🔤 **Word Guessing Mechanism:** Users try to guess the correct word by filling in missing letters.
- 🎨 **Modern Interface:** User-friendly and stylish design.
- 📱 **Mobile Compatibility:** Works on Android using Capacitor and WebView.
- 🌍 **Fully English:** All texts and messages are set in English.
- 🚫 **No Popup Messages:** Information messages are displayed on the screen instead of popups.
- 🎨 **Custom Button Designs:** Styled with CSS for a sleek and modern look.

## 📂 Project Structure
```plaintext
word-game-mobil-app/
├── android/                    # Android platform folder (Created with Capacitor)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── assets/
│   │   │   │   │   ├── public/  # Location of web content
│   │   │   │   │   │   ├── index.html
│   │   │   │   │   │   ├── global.css
│   │   │   │   │   │   ├── script.js
├── www/                         # Main web content (HTML, CSS, JS)
│   ├── index.html
│   ├── global.css
│   ├── script.js
├── capacitor.config.json        # Capacitor configuration file
├── package.json                 # Project dependencies
└── README.md                    # This document
```

## 🔧 Installation and Running
### 1️⃣ Install Required Dependencies
Run the following command in the terminal:
```bash
npm install
```

### 2️⃣ Add and Sync Android Platform
```bash
npx cap add android   # If the Android platform is not added
npx cap sync android  # Copies web content to Android
```

### 3️⃣ Open and Run in Android Studio
```bash
npx cap open android
```
- Once **Android Studio** opens, select an appropriate emulator or a physical device and run the application.

## 🛠 Configuration
### Capacitor Configuration (`capacitor.config.json`)
```json
{
  "appId": "com.example.wordgame",
  "appName": "Word Guessing Game",
  "webDir": "www",
  "bundledWebRuntime": false
}
```
This file specifies which directory Capacitor should use as web content.

## 📌 Important Notes
- **All texts have been translated into English.**
- **Popup messages have been removed, and messages will now be displayed directly on the screen.**
- **Button designs have been updated using CSS.**
- **Web content is copied from `www/` to `android/app/src/main/assets/public/`.**

## 📜 License
This project is licensed under the **MIT License**. Anyone is free to develop and use it.

---

## 👤 Developer

**Bektaş Sarı**<br>
PhD in Advertising, AI + Creativity researcher<br>
Flutter Developer & Software Educator<br>

- **Email:** [bektas.sari@gmail.com](mailto:bektas.sari@gmail.com)  
- **LinkedIn:** [linkedin.com/in/bektas-sari](https://www.linkedin.com/in/bektas-sari)  
- **Researchgate:** [researchgate.net/profile/Bektas-Sari-3](https://www.researchgate.net/profile/Bektas-Sari-3)  
- **Academia:** [independent.academia.edu/bektassari](https://independent.academia.edu/bektassari)

---

📧 My goal in this project was to convert an application with index.html, style.css, and script.js files into a mobile application. 
The application opens and runs in Android Studio, but it has many missing features. Anyone can make changes as they wish and fix the missing parts..

If you have any questions, feel free to contact me!
