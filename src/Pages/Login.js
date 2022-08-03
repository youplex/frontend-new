import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import loginhero from "../assets/loginhero.png";

function Login() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1001852224050-vgrsbike4s77osot5j0e37p6cdlvh3hs.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  // If we have no user :show sign in button
  // If we have a user: show sing out button


  return (
    <div className="App">
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-3/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-3/4 ml-8"
              alt="hero"
              src={loginhero}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900 text-left -mt-16">
              Create Your First
              <br className="hidden lg:inline-block" />
              Distraction Free Playlist
            </h1>
            <div className="flex justify-center">
              <div id='signInDiv'></div>
              {
                user &&
                <div>
                  <h3>{user.name}</h3>
                </div>
              }
              {Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignOut(e)}> Sign Out</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
