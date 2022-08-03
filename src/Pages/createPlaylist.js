import React from 'react';

function CreatePlaylist() {
  return (
    <>
      {/* Navbar */}
      <div>
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-center items-center px-6 py-10 mx-auto mt-4 space-y-8 md:flex-row md:space-y-0 text-center ax-w-lg text-4xl font-bold text-center md:text-3xl">
          <h1>
            Welcome Rahul, <br />
            Create a New Playlist!
          </h1>
        </div>
        <div className="search container flex justify-center items-center px-6 py-10 mx-auto mt-4 space-y-8 md:flex-row md:space-y-0">
          <form action="#">
            <input type="text" placeholder=" Search Courses" name="search" />
            <button>
              <i
                className="fa-solid fa-circle-plus"
                style={{ fontSize: 20, marginLeft: "2rem" }}
              ></i>
            </button>
          </form>
        </div>
        <div className="flex justify-center md:justify-center">
          <a
            href=" #"
            className="hidden p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-btnLight md:block"
          >
            Generate Playlist
          </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#07319B"
            fillOpacity={1}
            d="M0,192L34.3,186.7C68.6,181,137,171,206,186.7C274.3,203,343,245,411,234.7C480,224,549,160,617,154.7C685.7,149,754,203,823,224C891.4,245,960,235,1029,224C1097.1,213,1166,203,1234,202.7C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>

  );
}

export default CreatePlaylist; 