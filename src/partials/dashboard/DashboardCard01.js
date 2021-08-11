import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Download from '../../partials/Download'
import EditMenu from '../EditMenu';
import Icon from '../../images/excel.png'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01({title, numNotifications, ctr, numUsers, numApps, numTopics, text, file, fileName}) {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314,
          314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202,
          202, 202, 314, 720, 642,
        ],
        borderColor: tailwindConfig().theme.colors.gray[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="50" height="50" alt="Icon 01" />

          <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
          {/* Menu button */}
          <Download className="relative inline-flex" file={file} fileName={fileName}>
          </Download>
        </header>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1 text-center">Num. Notifications</div>
        <div className="flex items-start justify-center">
          <div className="text-3xl font-bold text-gray-800 mr-2">{numNotifications}</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full mb-1">{ctr}% CTR</div>
        </div>
        <div className="text-gray-400 mt-2 text-center">
          <p>{text}</p>
        </div>
      </div>
      <div className="px-5 py-5 grid grid-flow-col grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Num. Users</div>
          <div>
            <div className="text-2xl font-bold text-gray-800 mr-2">{numUsers}</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Num. Apps</div>
          <div>
            <div className="text-2xl font-bold text-gray-800 mr-2">{numApps}</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Num. Topics</div>
          <div>
            <div className="text-2xl font-bold text-gray-800 mr-2">{numTopics}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
