import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import GENERAL_WGAN from "../data/wgan_data.csv"
import GENERAL_WGANGP from "../data/wgangp_data.csv"
import GENERAL_CWGANGP from "../data/cwgangp_data.csv"
import INDIVIDUAL_WGANGP from "../data/individual_wgangp_data.csv"

import DashboardCard01 from "../partials/dashboard/DashboardCard01";

function Dashboard() {

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
          <div className="flex px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

              <div className="grid grid-cols-12 gap-6">
                  <DashboardCard01 title={"General WeAreUs I"} numNotifications={"20k"} ctr={56} numUsers={1} numApps={14} numTopics={8}
                                   text={'A data set generated using a' +
                  ' Wasserstein Generative Adversarial Network' +
                  ' trained upon mobile push-notifications captured in-the-wild.'}
                                   file={GENERAL_WGAN} fileName={'general_weareus_1.csv'}/>
                  <DashboardCard01 title={"General WeAreUs II"} numNotifications={"20k"} ctr={53} numUsers={1} numApps={51} numTopics={27}
                                   text={'A data set generated using the a' +
                  ' Wasserstein Generative Adversarial Network with Gradient Penalty' +
                  ' trained upon mobile push-notifications captured in-the-wild.'}
                                   file={GENERAL_WGANGP} fileName={'general_weareus_2.csv'}/>
                  <DashboardCard01 title={"General WeAreUs III"} numNotifications={"~20k"} ctr={57} numUsers={1} numApps={105} numTopics={26}
                                   text={'A data set generated using a' +
                  ' Conditional Wasserstein Generative Adversarial Network with Gradient Penalty' +
                  ' trained upon mobile push-notifications captured in-the-wild.'}
                                   file={GENERAL_CWGANGP} fileName={'general_weareus_3.csv'}/>

                  <DashboardCard01 title={"Individual WeAreUs"} numNotifications={"260k"} ctr={61} numUsers={13} numApps={68} numTopics={28}
                                   text={'A data set generated using a' +
                                   ' Wasserstein Generative Adversarial Network with Gradient Penalty' +
                                   ' trained upon individual subscriber mobile push-notifications captured in-the-wild' +
                                   ' and combined to create a multi-user data set.'}
                                   file={INDIVIDUAL_WGANGP} fileName={'individual_weareus.csv'}/>
              </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;