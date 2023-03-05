import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectPlaceData } from '../../redux/places/selectors';
import { Place } from '../../redux/places/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function registerChart() {
  const { items, status } = useSelector(selectPlaceData)

  const getData = (items: Place[]): number[] => {
    let inreg = 0;
    let nonreg = 0;
    for (const item of items) {
      if (item.inRegistry === true) {
        inreg++
      } else {
        nonreg++;
      }
    }
    return [inreg, nonreg]
  }

  if (status === 'completed') {
    const data = {
      labels: [
        'В реестре',
        'Не в реестре'
      ],
      datasets: [
        {
          label: '',
          data: getData(items),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return <Doughnut data={data} />
  } else {
    return <></>
  }
}
