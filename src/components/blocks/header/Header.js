import {Logo} from "components/base";
import {NavLink} from "react-router-dom";
import {useUserContext} from "context/UserContext";
import {useLanguageContext} from "context/LanguageContext";
import "scss/header.scss";
const Header = () => {
  const menuItems = [
    {
      id: 1,
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "Popular",
      path: "/popular",
    },
    {
      id: 3,
      text: "NowPlaying",
      path: "/now-playing",
    },
  ];

  const accountMenuItems = [
    {
      id: 1,
      text: "Favorite Movies",
      path: "/favorite-movies",
    },

    {
      id: 2,
      text: "Favorite Tv Shows",
      path: "/favorite-tv-shows",
    },
    {
      id: 3,
      text: "Watch List Movies",
      path: "/watch-list-movies",
    },
  ];

  const {user} = useUserContext();
  const {setLanguage} = useLanguageContext();

  const changeLanguage = (e) => {
    const lang = e.target.value;
    setLanguage(lang);

    localStorage.setItem("language", lang);
  };

  return (
    <header className="d-flex align-items-center justify-content-center flex-column py-3">
      <div>
        <Logo />
      </div>
      <nav className="navbar d-flex align-items-center">
        <div className="container py-3">
          <ul className="nav list-unstyled d-flex">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item me-3 fw-bolder">
                <NavLink className="fs-5" to={item.path}>
                  {item.text}
                </NavLink>
              </li>
            ))}
            <select className="text-bg-dark" onChange={changeLanguage} name="lang">
              <option value="en-US">English</option>
              <option value="tr-TR">Türkçe</option>
            </select>
          </ul>
        </div>
      </nav>
      {user && (
        <nav className="navbar text-bg-secondary w-75 rounded-4">
          <div className="container py-3">
            <ul className="nav w-100 justify-content-center mb-0">
              {accountMenuItems.map((item) => (
                <li key={item.id} className="nav-item mx-5 fw-bolder">
                  <NavLink className="fs-5" to={item.path}>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
