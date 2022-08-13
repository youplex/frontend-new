import { Navbar, ProgressTracker, Sidebar } from '../components';
import { useSelector } from "react-redux";
import { usePlaylistQuery } from '../redux/services/playlistApi';

const Dashboard = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: playlistData, isLoading } = usePlaylistQuery(token);
  return (
    <>
      <Navbar page="User Profile" />
      <Sidebar />
      <ProgressTracker {...{playlistData, isLoading}} />
      {/* <SearchBar placeholder="Quick Search..."/> */}
      {/* <VideoPlayer /> */}
    </>
  );
};
export default Dashboard;
