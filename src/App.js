import {Routes, Route} from "react-router-dom";

// Pages
import Home from "views/Home";
import Popular from "views/Popular";
import NowPlaying from "views/NowPlaying";

//Detail Pages
import NowPlayingDetail from "views/NowPlayingDetail";
import PopulerDetails from "views/PopulerDetails";

//account Pages
import FavMovies from "views/account/FavMovies";
import FavTvShows from "views/account/FavTvShows";
import WatchListMovie from "views/account/WatchListMovie";

// Layout
import Layout from "layout/Layout";

// Context
import UserProvider from "context/UserContext";
import LanguageProvider from "context/LanguageContext";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LanguageProvider>
            <UserProvider>
              <Layout />
            </UserProvider>
          </LanguageProvider>
        }>
        <Route index element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/popular/:id" element={<PopulerDetails />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/now-playing/:id" element={<NowPlayingDetail />} />
        <Route path="/favorite-movies" element={<FavMovies />} />
        <Route path="/favorite-tv-shows" element={<FavTvShows />} />
        <Route path="/watch-list-movies" element={<WatchListMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
