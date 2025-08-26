# Spotify Clone

A modern web application that emulates the core experience of Spotify, built with React, Vite, and Tailwind CSS. 
This project demonstrates a fully functional music streaming interface, including authentication, playlists, 
song browsing, and a responsive audio player. 
It is designed for learning, portfolio, and demonstration purposes.

---

## 🚀 Project Description

Spotify Clone is a feature-rich music streaming web app inspired by Spotify. 
Users can browse albums and songs, play music, manage playlists, and authenticate via social providers 
(Google, Facebook, Apple) using Supabase. 
The UI is responsive and mimics the look and feel of Spotify, including a sidebar, navbar, player controls, 
and dynamic backgrounds.

---

## 🛠️ Tech Stack

- **React** → UI library for building interactive interfaces
- **Vite** → Fast development and build tool
- **Tailwind CSS** → Utility-first CSS framework for styling
- **React Router** → Client-side routing
- **Supabase** → Authentication and backend services
- **FontAwesome** → Icon library
- **ESLint** → Linting and code quality

---

## ✨ Features

- 🔑 **Authentication**: Social login (Google, Facebook, Apple) via Supabase  
- 📱 **Responsive UI**: Adapts to desktop and mobile screens  
- 📂 **Sidebar Navigation**: Access library, playlists, podcasts  
- 🔍 **Navbar**: Search, navigation, user profile, install app  
- 🏠 **Home Page**: Featured charts, trending albums, and songs  
- 💿 **Album & Song Pages**: View album/song details, play music, dynamic backgrounds  
- 🎵 **Audio Player**: Play/pause, next/previous, seek bar, shuffle, loop, volume control  
- 🎶 **Playlist Management**: Create playlists, browse podcasts  
- 🌐 **Context API**: Global state management for player controls  

---

## 📂 Project Structure

```
spotify-clone/
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, icons, audio files, and data
│   ├── components/       # UI components (Sidebar, Navbar, Player, Display, AlbumItem, SongItem, etc.)
│   ├── context/          # React Context for player state management
│   ├── App.jsx           # Main app component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles (Tailwind)
│   ├── main.jsx          # Entry point
├── supabase.js           # Supabase client setup
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project metadata and dependencies
├── index.html            # HTML template
└── README.md             # Project documentation
```

### 🔑 Key Folders & Files

- **components/** → UI components for navigation, display, authentication, and player controls.  
- **assets/** → Images, icons, and mock data for albums and songs.  
- **context/** → Implements React Context for global player state and controls.  
- **supabase.js** → Configures Supabase client for authentication.  
- **App.jsx** → Main application layout and routing.  

---

## ⚡ Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/DaITwone/spotify-clone.git
   cd spotify-clone
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**
   - Create a `.env` file and add your Supabase credentials:
     ```env
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
4. **Run the development server**
   ```sh
   npm run dev
   ```
5. **Open in browser**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 🎧 Usage

1. **Sign Up / Log In** → Authenticate using Google, Facebook, or Apple. (Supabase OAuth)  
2. **Browse Music** → Explore featured charts, trending albums, and songs on the home page.  
3. **Play Songs** → Click on any song or album to view details and start playback.  
4. **Player Controls** → Use the bottom player to play/pause, skip, seek, shuffle, loop, and adjust volume.  
5. **Create Playlists & Browse Podcasts** → Use sidebar options to manage playlists and discover podcasts.  
6. **Profile & Logout** → Access user profile and sign out from the navbar.  

---

## 🔮 Future Improvements

- Add real-time music streaming and playlist persistence  
- Integrate search functionality for songs and albums  
- Implement user profile management and settings  
- Add support for liking and saving songs/albums  
- Enhance mobile responsiveness and accessibility  
- Connect to a real music API for dynamic content  

---
