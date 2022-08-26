import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { DateTime, Navbar, Sidebar } from "../components";
import { toast } from 'react-toastify'

export default function Scheduling() {
  const { token, user } = useSelector((state) => ({ ...state.auth }));
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [summary, setSummary] = useState(searchParams.get("summary") || "");
  const [description, setDescription] = useState(searchParams.get("description") || "");
  const [page, setPage] = useState(searchParams.get("page") || "");
  const [loading, setLoading] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSchedule = async () => {
    const getISODate = (time) => new Date(time).toISOString();
    
    const [start, end] = [getISODate(startTime), getISODate(endTime)];
    if (!summary.trim() || !description.trim() || !start || !end) {
      toast.error('All fields are required');
      return;
    }
    const timeDiff = new Date(endTime) - new Date(startTime);
    if (timeDiff < 60000 * 10) {
      toast.error("Least time for creating a schedule is 10 minutes");
      return;
    }
    setLoading(true);
    try {
      let desc = description.trim();
      if(page) desc += `&page=${page}`;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const { response, data, status } = await axios.post(
        "/event/create",
        {
          start,
          end,
          timeZone,
          summary: summary.trim(),
          description: desc,
          isRecurring,
        },
        {
          headers: {
            "x-auth-token": token,
          },
          withCredentials: true,
        }
      );
      if (status == 200) {
        toast.success("Schedule Created successfully");
        navigate(-1);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log("error", error.response);
    }finally{
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar page="Schedule" />
      <Sidebar />
      <div className="lg:w-9/12 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 ml-52">
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
              value={page ? `${description}&page=${page}` : description ? description : ''}
              onChange={(e) => setDescription(e.target.value)}
              className="w-9/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 mt-2 leading-8 transition-colors duration-200 ease-in-out"
              name=""
              id=""
              cols="40"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="flex gap-5  items-center">
          <div className=" mt-4">
            <h2 className="font-medium">Select Start Time</h2>
            <DateTime dateTime={startTime} setDateTime={setStartTime} />
          </div>
          <div className="relative mt-4">
            <h2 className="font-medium">Select End Time</h2>
            <DateTime dateTime={endTime} setDateTime={setEndTime} />
          </div>
          <div className="relative mt-6 flex flex-col items-start">
            <label htmlFor="recur" className="font-medium" >Make it Recurring</label>
            <div className="my-5 pl-4">
              <input value={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} style={{ transform: 'scale(1.4)' }} type="checkbox" id="recur"  />
            </div>
          </div>
          
          {loading && (<div
            className=" w-max h-max bg-primary py-1 px-2 ml-3 mt-12 rounded text-white focus:outline-none hover:bg-blue-700"
          >
            Loading ...
          </div>)}
  
          {(user?.calendarAccess && !loading) ?
          (<button
            onClick={handleSchedule}
            className=" w-max h-max bg-primary py-1 px-2 ml-3 mt-12 rounded text-white focus:outline-none hover:bg-blue-700"
          >
            Schedule
          </button> ):
          <>
          {!loading &&
          <div
              className=" w-max h-max bg-primary py-2 px-2 mt-12 rounded text-white focus:outline-none hover:bg-blue-700"
          >
            Calendar access is not granted, relogin
            </div>}
          </>
          }
          
        </div>
      </div>
    </>
  );
}
