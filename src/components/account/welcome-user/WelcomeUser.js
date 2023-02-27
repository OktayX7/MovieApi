import {useLanguageContext} from "context/LanguageContext";
import {useUserContext} from "context/UserContext";
const WelcomeUser = () => {
  const {language} = useLanguageContext();
  const {user} = useUserContext();

  return (
    <div className="text-center my-6 fw-bolder fs-1 text-danger">
      {language.language === "en-US" ? `Welcome ${user.username}` : `Hoşgeldin ${user.username}`}
    </div>
  );
};

export default WelcomeUser;
