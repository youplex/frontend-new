import { Navbar, ProgressTracker, Sidebar } from '../components';
<<<<<<< HEAD
import{Card} from '../components';
=======
import { useSelector } from "react-redux";
import { usePlaylistQuery } from '../redux/services/playlistApi';

>>>>>>> 24c7a0e4680a1855bc8cdea38e5872fb151d26fe
const Dashboard = () => {
  const { token } = useSelector((state) => ({...state.auth}));
  const { data: playlistData, isLoading } = usePlaylistQuery(token);
  return (
    <>
      <Navbar page="User Profile" />
      <Sidebar />
<<<<<<< HEAD
      {/* <ProgressTracker /> */}
      <Card />
=======
      <ProgressTracker {...{playlistData, isLoading}} />
>>>>>>> 24c7a0e4680a1855bc8cdea38e5872fb151d26fe
      {/* <SearchBar placeholder="Quick Search..."/> */}
      {/* <VideoPlayer /> */}
    </>
  );
};
export default Dashboard;
