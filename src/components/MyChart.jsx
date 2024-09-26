// // src/MyChart.js
// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// // Register the components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const MyChart = () => {
//     const data = {
//         labels: ['Mar 2022', 'Apr 2022', 'May 2022', 'June 2022', 'July 2022', 'Aug 2022'],
//         datasets: [
//             {
//                 label: '0,2,4,6,8',
//                 data: [8, 6, 4, 5, 6, 5],
//                 backgroundColor: 'rgba(124, 124, 213, 0.6)',
//                 borderColor: 'rgb(124, 124, 213)',
//                 borderWidth: 1,
//             }
//         ]
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Example',
//             },
//         },
//         scales: {
//             y: {
//                 beginAtZero: true, // Start y-axis at zero
//                 ticks: {
//                     display: false, // Hide y-axis labels
//                 },
//             },
//         },
//     };

//     return <Bar options={options} data={data} className=''/>;
// };

// export default MyChart;




// src/MyChart.js



import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
    const data = {
        labels: ['Mar 2022', 'Apr 2022', 'May 2022', 'June 2022', 'July 2022', 'Aug 2022'],
        datasets: [
            {
                label: '0,2,4,6,8',
                data: [8, 6, 4, 5, 6, 5],
                backgroundColor: '#3B82F6',
                borderColor: 'rgb(124, 124, 213)',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Example',
            },
        },
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at zero
                ticks: {
                    // Define specific tick values
                    callback: function(value) {
                        return [0, 2, 4, 6, 8].includes(value) ? value : '';
                    },
                    display: true, // Show y-axis labels
                },
            },
            x: {
                ticks: {
                    autoSkip: true, // Prevent skipping labels on x-axis
                },
            },
        },
    };

    // Inline styles for the chart container
    const chartContainerStyle = {
        width: '90%', // Set the width to 60%
        margin: 'auto', // Center the chart
    };

    return (
        <div style={chartContainerStyle}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default MyChart;
