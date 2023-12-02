import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = () => {
    const data = {
        labels: ['Male', 'Female', 'unknown'],
        datasets: [
            {
                label: '# of Votes',
                data: [40, 35,25],
                backgroundColor: [
                    'darkorange',
                    'blue',
                    'darkgreen'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                   
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        resonsive: true,
        plugins: {
            legend: {
                display: true
            },

        },
        maintainAspectRatio: false,
    
    }
    return <>
    
        <Doughnut data={data} options={options} width={50}
            height={180}
            

        />

    </>
}

export default Donut