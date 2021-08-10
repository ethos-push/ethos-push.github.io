import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import WGAN from "../data/wgan_data.csv"
import WGANGP from "../data/wgangp_data.csv"
import CWGANGP from "../data/cwgangp_data.csv"

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
                  <DashboardCard01 title={"WGAN"} numNotifications={"20,000"} ctr={56} text={'A data set generated using a' +
                  ' Wasserstein Generative Adversarial Network' +
                  ' trained upon mobile push-notifications recorded in-the-wild.'}
                                   file={WGAN} fileName={'ethos_wgan.csv'}/>
                  <DashboardCard01 title={"WGAN-GP"} numNotifications={"20,000"} ctr={53} text={'A data set generated using the a' +
                  ' Wasserstein Generative Adversarial Network with Gradient Penalty' +
                  ' trained upon mobile push-notifications recorded in-the-wild.'}
                                   file={WGANGP} fileName={'ethos_wgangp.csv'}/>
                  <DashboardCard01 title={"CWGAN-GP"} numNotifications={"19,949"} ctr={57} text={'A data set generated using a' +
                  ' Conditional Wasserstein Generative Adversarial Network with Gradient Penalty' +
                  ' trained upon mobile push-notifications recorded in-the-wild.'}
                                   file={CWGANGP} fileName={'ethos_cwgangp.csv'}/>
              </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;