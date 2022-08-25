import { Navbar, ProgressTracker, Sidebar, Loader } from '../components';
import { useSelector } from "react-redux";
import { usePlaylistQuery } from '../redux/services/playlistApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';



const Dashboard = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: playlistData, isLoading, error } = usePlaylistQuery(token);
  const navigate = useNavigate();

  useEffect(() => {
    if(!error && !isLoading && playlistData?.length === 0){
      navigate('/createplaylist')
    }
  },[playlistData, isLoading, error])

  return (
    <>
      <Navbar page="User Profile" />
      <Sidebar />
      {error && JSON.stringify(error, null, 4)}
      {isLoading ? 
        <Loader message="Fetching your playlist" /> 
      :
        <ProgressTracker {...{playlistData, isLoading, error}} />
      }
    </>
  );
};
export default Dashboard;
