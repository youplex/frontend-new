import { Navbar, ProgressTracker, Sidebar, Loader } from '../components';
import { useSelector } from "react-redux";
import { usePlaylistQuery } from '../redux/services/playlistApi';



const Dashboard = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: playlistData, isLoading, error } = usePlaylistQuery(token);

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
      {/* <SearchBar placeholder="Quick Search..."/> */}
      {/* <VideoPlayer /> */}
    </>
  );
};
export default Dashboard;
