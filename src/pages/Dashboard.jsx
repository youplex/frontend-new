import { Navbar, ProgressTracker, Sidebar } from '../components'

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