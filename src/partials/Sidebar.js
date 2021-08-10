import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="flex">
            <NavLink exact to="/" className="block">
              <svg width="32" height="32" viewBox="0 0 32 32">
                <defs>
                  <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                    <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                    <stop stopColor="#A5B4FC" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                    <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                    <stop stopColor="#38BDF8" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="#6366F1" width="32" height="32" rx="16" />
                <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
                <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
                <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
              </svg>
            </NavLink>
            <h2 className="ml-3 my-auto text-white">ETHOS-Push</h2>
          </div>
        </div>

        {/* Links */}
        <div>
          {/*<h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">Pages</h3>*/}
          <ul className="mt-3">
            {/* About */}
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400 ${page === '' && 'text-indigo-500'}`} d="M4.68,13.716v-0.169H4.554C4.592,13.605,4.639,13.658,4.68,13.716z M11.931,6.465
	c-0.307-0.087-0.623,0.106-0.706,0.432l-1.389,5.484c-0.901,0.084-1.609,0.833-1.609,1.757c0,0.979,0.793,1.773,1.773,1.773
	c0.979,0,1.773-0.794,1.773-1.773c0-0.624-0.324-1.171-0.812-1.486l1.377-5.439C12.422,6.887,12.239,6.552,11.931,6.465z
	M10.591,14.729H9.408v-1.182h1.183V14.729z M15.32,13.716c0.04-0.058,0.087-0.11,0.126-0.169H15.32V13.716z M10,3.497
	c-3.592,0-6.503,2.911-6.503,6.503H4.68c0-2.938,2.382-5.32,5.32-5.32s5.32,2.382,5.32,5.32h1.182
	C16.502,6.408,13.591,3.497,10,3.497z M10,0.542c-5.224,0-9.458,4.234-9.458,9.458c0,5.224,4.234,9.458,9.458,9.458
	c5.224,0,9.458-4.234,9.458-9.458C19.458,4.776,15.224,0.542,10,0.542z M15.32,16.335v0.167h-0.212
	c-1.407,1.107-3.179,1.773-5.108,1.773c-1.93,0-3.701-0.666-5.108-1.773H4.68v-0.167C2.874,14.816,1.724,12.543,1.724,10
	c0-4.571,3.706-8.276,8.276-8.276c4.57,0,8.275,3.706,8.275,8.276C18.275,12.543,17.126,14.816,15.32,16.335z"></path>
                  </svg>
                  <span className="text-sm font-medium">Home</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'about' && 'bg-gray-900'}`}>
              <NavLink exact to="/about" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'about' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400 ${page === 'about' && 'text-indigo-500'}`} d="M9.896,3.838L0.792,1.562v14.794l9.104,2.276L19,16.356V1.562L9.896,3.838z M9.327,17.332L1.93,15.219V3.27
								l7.397,1.585V17.332z M17.862,15.219l-7.397,2.113V4.855l7.397-1.585V15.219z"></path>
                  </svg>
                  <span className="text-sm font-medium">About</span>
                </div>
              </NavLink>
            </li>
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'data' && 'bg-gray-900'}`}>
              <NavLink exact to="/data" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'data' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400 ${page === 'data' && 'text-indigo-500'}`} d="M6.523,7.683c0.96,0,1.738-0.778,1.738-1.738c0-0.96-0.778-1.738-1.738-1.738c-0.96,0-1.738,0.778-1.738,1.738
								C4.785,6.904,5.563,7.683,6.523,7.683z M5.944,5.365h1.159v1.159H5.944V5.365z M18.113,0.729H1.888
								c-0.64,0-1.159,0.519-1.159,1.159v16.224c0,0.64,0.519,1.159,1.159,1.159h16.225c0.639,0,1.158-0.52,1.158-1.159V1.889
								C19.271,1.249,18.752,0.729,18.113,0.729z M18.113,17.532c0,0.321-0.262,0.58-0.58,0.58H2.467c-0.32,0-0.579-0.259-0.579-0.58
								V2.468c0-0.32,0.259-0.579,0.579-0.579h15.066c0.318,0,0.58,0.259,0.58,0.579V17.532z M15.91,7.85l-4.842,5.385l-3.502-2.488
								c-0.127-0.127-0.296-0.18-0.463-0.17c-0.167-0.009-0.336,0.043-0.463,0.17l-3.425,4.584c-0.237,0.236-0.237,0.619,0,0.856
								c0.236,0.236,0.62,0.236,0.856,0l3.152-4.22l3.491,2.481c0.123,0.123,0.284,0.179,0.446,0.174c0.16,0.005,0.32-0.051,0.443-0.174
								l5.162-5.743c0.238-0.236,0.238-0.619,0-0.856C16.529,7.614,16.146,7.614,15.91,7.85z"></path>
                  </svg>
                  <span className="text-sm font-medium">Data</span>
                </div>
              </NavLink>
            </li>
            {/* Customers */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'customers' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'customers' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-400 ${page === 'customers' && 'text-indigo-300'}`} d="M7 0l6 7H8v10H6V7H1z" />
                    <path className={`fill-current text-gray-600 ${page === 'customers' && 'text-indigo-500'}`} d="M18 7v10h5l-6 7-6-7h5V7z" />
                  </svg>
                  <span className="text-sm font-medium">Customers</span>
                </div>
              </NavLink>
            </li>*/}
            {/* Orders */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'orders' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'orders' && 'hover:text-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-400 ${page === 'orders' && 'text-indigo-300'}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                      <path className={`fill-current text-gray-700 ${page === 'orders' && 'text-indigo-600'}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                      <path className={`fill-current text-gray-600 ${page === 'orders' && 'text-indigo-500'}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                    </svg>
                    <span className="text-sm font-medium">Orders</span>
                  </div>
                  <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">4</span>
                  </div>
                </div>
              </NavLink>
            </li>*/}
            {/* Campaigns */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'campaigns' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'campaigns' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${page === 'campaigns' && 'text-indigo-500'}`} d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                    <path className={`fill-current text-gray-400 ${page === 'campaigns' && 'text-indigo-300'}`} d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                  </svg>
                  <span className="text-sm font-medium">Campaigns</span>
                </div>
              </NavLink>
            </li>*/}
            {/* Team */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page.startsWith('team-') && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page.startsWith('team-') && 'hover:text-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <path className={`fill-current text-gray-600 ${page.startsWith('team-') && 'text-indigo-500'}`} d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                      <path className={`fill-current text-gray-400 ${page.startsWith('team-') && 'text-indigo-300'}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                    </svg>
                    <span className="text-sm font-medium">Team</span>
                  </div>
                  <div className="flex flex-shrink-0 ml-2">
                    <svg className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400 ${page.startsWith('team-') && 'transform rotate-180'}`} viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </NavLink>
              <ul className={`pl-9 mt-1 ${!page.startsWith('team-') && 'hidden'}`}>
                <li className="mb-1 last:mb-0">
                  <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'team-tabs' && 'text-indigo-400 hover:text-indigo-400'}`}>
                    <span className="text-sm font-medium">Team - Tabs</span>
                  </NavLink>
                </li>
                <li className="mb-1 last:mb-0">
                  <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150" ${page === 'team-tiles' && 'text-indigo-400 hover:text-indigo-400'}`}>
                    <span className="text-sm font-medium">Team - Tiles</span>
                  </NavLink>
                </li>
              </ul>
            </li>*/}
            {/* Messages */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'messages' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'messages' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${page === 'messages' && 'text-indigo-500'}`} d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                    <path className={`fill-current text-gray-400 ${page === 'messages' && 'text-indigo-300'}`} d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                  </svg>
                  <span className="text-sm font-medium">Messages</span>
                </div>
              </NavLink>
            </li>*/}
            {/* Tasks */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'tasks' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'tasks' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${page === 'tasks' && 'text-indigo-500'}`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                    <path className={`fill-current text-gray-600 ${page === 'tasks' && 'text-indigo-500'}`} d="M1 1h22v23H1z" />
                    <path className={`fill-current text-gray-400 ${page === 'tasks' && 'text-indigo-300'}`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                  </svg>
                  <span className="text-sm font-medium">Tasks</span>
                </div>
              </NavLink>
            </li>*/}
            {/* Applications */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'applications' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'applications' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <circle className={`fill-current text-gray-400 ${page === 'applications' && 'text-indigo-300'}`} cx="18.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-600 ${page === 'applications' && 'text-indigo-500'}`} cx="5.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-600 ${page === 'applications' && 'text-indigo-500'}`} cx="18.5" cy="18.5" r="4.5" />
                    <circle className={`fill-current text-gray-400 ${page === 'applications' && 'text-indigo-300'}`} cx="5.5" cy="18.5" r="4.5" />
                  </svg>
                  <span className="text-sm font-medium">Applications</span>
                </div>
              </NavLink>
            </li>*/}
            {/* Settings */}
            {/*<li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                    <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                    <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                    <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                  </svg>
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </NavLink>
            </li>*/}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;