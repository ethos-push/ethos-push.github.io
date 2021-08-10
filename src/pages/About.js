import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

function About() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="relative overflow-hidden px-10 my-4 py-6 rounded shadow-xl bg-white w-4/5 mx-auto">
                  <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block  opacity-20" aria-hidden="true">
                      <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <defs>
                              <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                              <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                              <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                                  <stop stopColor="#A5B4FC" offset="0%" />
                                  <stop stopColor="#818CF8" offset="100%" />
                              </linearGradient>
                              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                                  <stop stopColor="#4338CA" offset="0%" />
                                  <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                              </linearGradient>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                              <g transform="rotate(64 36.592 105.604)">
                                  <mask id="welcome-d" fill="#fff">
                                      <use xlinkHref="#welcome-a" />
                                  </mask>
                                  <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                                  <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
                              </g>
                              <g transform="rotate(-51 91.324 -105.372)">
                                  <mask id="welcome-f" fill="#fff">
                                      <use xlinkHref="#welcome-e" />
                                  </mask>
                                  <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                                  <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
                              </g>
                              <g transform="rotate(44 61.546 392.623)">
                                  <mask id="welcome-h" fill="#fff">
                                      <use xlinkHref="#welcome-g" />
                                  </mask>
                                  <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                                  <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
                              </g>
                          </g>
                      </svg>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="font-light text-gray-600">April 14, 2021</span>
                  </div>
                  <div className="mt-2 text-justify">
                      <a className="text-2xl text-gray-700 hover:text-gray-600">
                          What is ETHOS-Push?
                      </a>
                      <p className="mt-4 text-gray-600">
                          More about the methods
                      </p>
                  </div>
                  <div className="flex justify-end items-center mt-4 w-full">
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-2">
                          <span className="hidden xs:block">Learn More</span>
                      </button>
                  </div>
              </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default About;