import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import Header from '../components/Header';
import Places from '../components/Places';
import CreatePlaces from './CreatePlaces';
import DashUsers from '../components/DashUsers';

export default function Dashboard() {
    const location = useLocation();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <div>
            
            <div className="min-h-screen flex flex-col md:flex-row">
                <div className='md:w-56'>
                    {/* Sidebar */}
                    <DashSidebar />
                </div>
                {/* profile... */}
                {tab === 'profile' && <DashProfile />}
                {tab === 'travelplaces' && <Places />}
                {tab === 'addplaces' && <CreatePlaces />}
                {/* users */}
      {tab === 'users' && <DashUsers />}
            </div>
        </div>
    )
}