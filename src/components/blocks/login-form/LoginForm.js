import React, {useState} from "react";
import {useUserContext} from "context/UserContext";
import {getNewRequestToken, login, getSessionId, getAccountDetails} from "apis";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useUserContext();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    getNewRequestToken()
      .then((response) => {
        const requestToken = response.request_token;
        return login(username, password, requestToken);
      })
      .then((response) => {
        const requestToken = response.request_token;
        return getSessionId(requestToken);
      })
      .then((response) => {
        const sessionId = response.session_id;
        localStorage.setItem("sessionId", sessionId);
        setUser({session: sessionId});
        return getAccountDetails(sessionId);
      })
      .then((response) => {
        const accountId = response.id;
        const username = response.username;
        localStorage.setItem("username", username);
        localStorage.setItem("accountId", accountId);

        setUser((prev) => ({...prev, username: username}));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="row" onSubmit={handleLogin}>
      <div className="col-auto mx-auto">
        <label className="form-label d-block">
          Username:
          <input className="form-control" type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className="form-label d-block my-4">
          Password:
          <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="btn btn-secondary d-block mx-auto mb-4" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
