import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight, HiDocumentText } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'

import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();

  const { currentUser } = useSelector((state) => state.user);
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
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
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
          <Sidebar.Item icon={HiDocumentText} className='cursor-pointer'>
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
