import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutUser } from "../redux/services/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ page }) {
  const { user, token } = useSelector((state) => ({...state.auth}));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data, status } = await axios.post('/auth/logout', {}, {
        headers: {
          'x-auth-token': token
        }, withCredentials: true
      });
      if(status == 200){
        dispatch(logoutUser());
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" mb-8">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div>
              <div className="flex justify-between ml-40 py-6 h-16 w-4/5">
                <h1 className="text-bold font-bold text-2xl">{page}</h1>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    <Link to='/createplaylist' className="bg-primary hover:bg-blue-500 ease-in duration-100 text-white px-4 py-2 mr-4 rounded h-max w-max">Create Playlist</Link>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          referrerPolicy="no-referrer"
                          className="h-8 w-8 rounded-full  border-2  border-blue-500 "
                          src={ `${user?.image}` || "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}
                          alt={user?.name || 'user'}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a onClick={handleLogout}
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Navbar;
