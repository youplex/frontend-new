import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  PencilIcon,
  DotsVerticalIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export const convertSecToHMS = (time_in_seconds) => {
  let remainingSeconds = time_in_seconds; // initialize with total time
  const hours = Math.floor(remainingSeconds / (60 * 60));
  remainingSeconds = time_in_seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formatTime = (t) => t.toString().padStart(2, 0);

  const out = [];
  if (hours > 0) out.push(formatTime(hours));
  out.push(formatTime(minutes));
  out.push(formatTime(seconds));

  return out.join(":");
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Notes() {
  return (
    <div className="bg-gray-200 px-4 py-5 sm:px-6 ml-40 w-4/5 rounded-md">
      <div className="flex space-x-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-medium text-gray-900">
            <a href="#" className="hover:underline">
              React Testing Playlist
            </a>
          </h1>
          <p className="text-sm text-bg mt-2">
            <a href="#" className="hover:underline">
              August 25, 2022
            </a>
          </p>
          <p className="text-md text-bg mt-4 leading-6">
            <a href="#" className="hover:underline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus id, fugiat voluptas vero reprehenderit explicabo,
              aliquam sint voluptatibus tenetur dolore excepturi? Repellendus,
              at quas! Aliquid eos enim, iste, cum sunt dolorum reiciendis quam
              explicabo eius aspernatur ea voluptates totam nam nostrum nemo
              aliquam iure at illum mollitia cupiditate nihil incidunt vero.
              Assumenda excepturi rem accusantium illo corrupti nisi eum, quo
              mollitia harum dolorum ducimus quas sit fugit veniam totam
              consequatur. Ipsa eius, excepturi ipsum aperiam cupiditate labore
              fugiat at, necessitatibus porro beatae nam eligendi saepe sed
              rerum officia esse, quos aliquam. Et ad laudantium aut
              necessitatibus distinctio, iusto est sapiente.
            </a>
          </p>
        </div>
        <div className="flex-shrink-0 self-top flex">
          <Menu as="div" className="relative z-30 inline-block text-left">
            <div>
              <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <PencilIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Edit</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <TrashIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Delete</span>
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
