// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { useLocation } from 'react-router-dom';
// import DashSidebar from '../components/DashSidebar';

// export default function Dashboard() {
//   const location = useLocation();
//   const [tab, setTab] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get('tab');
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   }, [location.search]);
//   return (
//     <div><Header />
//       <div className=''>
//         {/* Sidebar */}
//         <DashSidebar />
//       </div>
//       {/* profile... */}
//       {/* {tab === 'profile' && <DashProfile />} */}
//     </div>
//   )
// }
