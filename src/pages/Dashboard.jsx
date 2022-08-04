
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import ProgressTracker from '../components/ProgressTracker';

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