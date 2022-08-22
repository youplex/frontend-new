import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { DateTime, Navbar, Sidebar } from "../components";

export default function Scheduling() {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [summary, setSummary] = useState(searchParams.get("summary") || "");
  const [description, setDescription] = useState(
    searchParams.get("description") || ""
  );

  const handleSchedule = async () => {
    const getISODate = (time) => new Date(time).toISOString();
    const timeDiff = new Date(endTime) - new Date(startTime);
    if (timeDiff < 60000 * 10) {
      alert("Least time for creating a schedule is 10 minutes");
      return;
    }
    const [start, end] = [getISODate(startTime), getISODate(endTime)];
    if (!summary.trim() || !description.trim() || !start || !end) {
      alert("fill details correctly");
      return;
    }
    try {
      const { response, data, status } = await axios.post(
        "/event/create",
        {
          start,
          end,
          summary: summary.trim(),
          description: description.trim(),
        },
        {
          headers: {
            "x-auth-token": token,
          },
          withCredentials: true,
        }
      );
      if (status == 200) {
        console.log(data);
        alert("Event Created successfully");
        navigate(-1);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log("error", error.response);
    }
  };
  return (
    <>
      <Navbar page="Schedule" />
      <Sidebar />
      <div class="lg:w-9/12 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 ml-52">
        <div className="">
          <div className="">
            <label htmlFor="" className="font-medium">
              Summary
            </label>{" "}
            &nbsp; <br />
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className=" w-9/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              name=""
              id=""
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="font-medium">
              Description
            </label>{" "}
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-9/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              name=""
              id=""
              cols="40"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="relative mt-32">
            <h2 className="font-medium">Select Start Time</h2>
            <DateTime dateTime={startTime} setDateTime={setStartTime} />
          </div>
          <div className="relative mt-32">
            <h2 className="font-medium">Select End Time</h2>
            <DateTime dateTime={endTime} setDateTime={setEndTime} />
          </div>
          <button
            onClick={handleSchedule}
            className="mt-36 bg-primary px-2 py-1 absolute top-80 rounded text-white focus:outline-none hover:bg-blue-700"
          >
            Schedule
          </button>
        </div>
      </div>
    </>
  );
}
