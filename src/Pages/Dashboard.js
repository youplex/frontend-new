import Navbar from '../components/_components/Navbar';
import Sidebar from '../components/_components/Sidebar';
import ProgressTracker from '../components/_components/ProgressTracker';

const Dashboard = () => {
    return (
        <>  
            <Navbar page='User Profile' />
            <Sidebar />
            <ProgressTracker />
            
            {/* <SearchBar placeholder="Quick Search..."/> */}
            {/* <VideoPlayer /> */}
            
        </>
      )
}

export default Dashboard;