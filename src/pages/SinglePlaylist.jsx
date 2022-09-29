import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Loader, Navbar, Sidebar } from "../components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useVideosQuery, usePlaylistQuery } from "../redux/services/playlistApi";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

function SinglePlaylist() {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 25;
  const [isReadMore, setReadMore] = useState(false);
  const { refetch: refetchPlaylists } = usePlaylistQuery(token);
  const { data: { playlist = {}, videos = [] } = {}, isLoading } =
    useVideosQuery({
      token,
      playlistId,
      page
    });

  const handleDelete = async () => {
    try {
      const { data, status } = await axios.delete(`/playlist/${playlistId}`, {
        headers: {
          "x-auth-token": token,
        },
        withCredentials: true,
      });
      if (status === 200) {
        toast.success('Playlist deleted successfully');
        navigate("/dashboard");
        refetchPlaylists();
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  }

  return (
    <>
      <Sidebar />
      <Navbar page="Your Playlist" />

      <div className="ml-40 mt-4 flex w-4/5 space-x-16">
        
        <div className="rounded-lg mr-8">
          {!isLoading &&  <img className="rounded-md" alt="content" src={playlist?.thumbnail} />}
        </div>

        <div className="top-22 w-80">
          <h1 className="font-bold text-xl">{playlist?.title}</h1>
          {isLoading && <Loader message="Fetching playlists" />}

          <p>
            {(playlist?.description && !isLoading) || "No description"}
            {isReadMore ?
                playlist?.description
              :
                playlist?.description?.length > 240 ? `${playlist?.description.substring(0, 239)}...` : playlist?.description 
            }
            {playlist?.description?.length > 240  && <button onClick={() => setReadMore(prev => !prev)} className='text-blue-500'>Read {isReadMore ? 'Less' : 'More'}</button>} 
          </p>

          <div className="flex justify-between">
            <div className=" bg-primary w-max px-4 py-2 text-white rounded-md text-sm mt-4">
              <Link
                to={`/schedule?summary=${playlist?.title}&description=Watch%20Playlist%20Link:%20${window.location.href}`}
              >
                Schedule
              </Link>
            </div>
            <button
              onClick={handleDelete}
              className="bg-red-600 w-max px-4 py-2 text-white rounded-md text-sm mt-4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="ml-40 my-5 mt-10 text-xl font-medium	">
        Videos in this playlist
      </div>
      <div className="my-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={playlist?.totalVideos ? Math.ceil(playlist?.totalVideos / itemsPerPage) : 0}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          forcePage={page - 1}
        />
      </div>
      <div className="ml-40 mb-10">
        {isLoading && <Loader />}
        {videos?.map((item, index) => {
          return (
            <Link key={item._id} to={`/video/${item._id}?playlist=${playlist._id}&page=${page}`}>
              <Card
                style={{ backgroundColor: "#F6F7FF", marginBottom: "10px" }}
                sx={{ width: 1125 }}
              >
                <CardContent style={{ padding: "10px" }}>
                  <div className="flex  justify-center p-2">
                    <h2 className="mr-2">{index + 1 + ((page - 1)  * itemsPerPage)}. </h2>

                    <p className="justify-center">
                      {item.title.length > 120
                        ? `${item.title.substring(0, 117)}...`
                        : item.title}{" "}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
      <div className="mb-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(playlist?.totalVideos / itemsPerPage) || 0}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          forcePage={page - 1}
        />
      </div>
    </>
  );
}
export default SinglePlaylist;
