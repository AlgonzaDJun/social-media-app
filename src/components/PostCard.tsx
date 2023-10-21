import { useRef, useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import ClickOutHandler from "react-clickout-handler";

const PostCard = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const saveButton = useRef<HTMLButtonElement>(null);

  return (
    <Card>
      <div className="flex gap-2 items-center">
        <div>
          <Avatar />
        </div>
        <div className="grow">
          <p>
            {" "}
            <a href="" className="font-bold">
              Algonza
            </a>{" "}
            membagikan sebuah{" "}
            <a href="" className="text-sky-700">
              post
            </a>
          </p>
          <p className="text-slate-600 text-sm">2 jam lalu</p>
        </div>
        <div>
          <button
            className="text-slate-500"
            ref={saveButton}
            onClick={() => {
              !dropDownOpen ? setDropDownOpen(true) : setDropDownOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <ClickOutHandler
            onClickOut={() => {
              setDropDownOpen(false);
            }}
            ignoredElements={saveButton}
          >
            <div className="relative">
              {dropDownOpen && (
                <div className="absolute -right-6 shadow-md shadow-gray-400 bg-white rounded-md border border-slate-300 w-52">
                  <a
                    href=""
                    className="block px-3 py-2 hover:bg-slate-200 mb-3"
                  >
                    Save Post
                  </a>
                  <a
                    href=""
                    className="block px-3 py-2 hover:bg-slate-200 mb-3"
                  >
                    Watch Post
                  </a>
                  <a
                    href=""
                    className="block px-3 py-2 hover:bg-slate-200 mb-3"
                  >
                    Turn Notification{" "}
                  </a>
                  <a href="" className="block px-3 py-2 hover:bg-slate-200">
                    Delete
                  </a>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
      <div>
        <p className="text-sm my-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae
          nobis, quo natus perferendis beatae voluptates ut corrupti sed facilis
          id deleniti nostrum voluptatum sequi ab illo laborum itaque ad.
        </p>
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="mt-4 flex gap-5">
        <button className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          89
        </button>
        <button className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          10
        </button>
        <button className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          4
        </button>
      </div>
      <div className="mt-5 flex items-center gap-6">
        <div>
          <Avatar />
        </div>
        <div className="grow border rounded-full relative">
          <textarea
            name="comment"
            className=" px-4 py-3 w-full block h-12 rounded-full"
            placeholder="komentar.."
          ></textarea>
          <button className="absolute right-4 top-3 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
