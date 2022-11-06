import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme} from '../Context/ThemeContext'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = ({graphData}) => {

    const {theme} = useTheme()
  return (
    <div>
        <Line 

        data={
            {
                labels: graphData.map(i=>i[0]+1)   ,
                datasets: [
                    {
                        data: graphData.map(i=>i[1]),
                        label: "wpm",
                        borderColor: theme.stats,
                        boxShadow: `0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)`
                        

                    }
                ]
            }
        }   />
    </div>
  )
}

export default Graph