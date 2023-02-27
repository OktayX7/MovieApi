import {LoginForm} from "components/blocks";
import {WelcomeUser} from "components/account";
import {useUserContext} from "context/UserContext";
const Home = () => {
  const {user} = useUserContext();
  return <div>{user ? <WelcomeUser /> : <LoginForm />}</div>;
};

export default Home;
