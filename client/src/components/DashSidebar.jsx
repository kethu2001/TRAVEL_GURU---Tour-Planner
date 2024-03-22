import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'

export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-60'>
      <Sidebar.Logo href="#" img={logo} imgAlt="Travelguru logo" className="h-24 flex flex-wrap">
        Travel Guru
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=travelplaces'>
            <Sidebar.Item
              active={tab === 'travelplaces'}
              icon={HiArrowSmRight}
            >
              Travel Places
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Users
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Reports
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
