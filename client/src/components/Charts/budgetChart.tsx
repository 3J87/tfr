import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectPlaceData } from '../../redux/places/selectors';
import { Place } from '../../redux/places/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function budgetChart() {
  const { items, status } = useSelector(selectPlaceData)

  const srarf = (items: number[]): number => {
    return items.reduce((acc, item) => acc + item) / items.length
  }

  const budgetData = (items: Place[]): number[] => {
    let federalBudget = items.map((item) => item.financingFromTheFederalBudget) as number[];
    let budgetOfTheSubjectOfTheFederation = items.map((item) => item.financingFromTheBudgetOfTheSubjectOfTheFederation) as number[];
    let budgetOfTheMunicipality = items.map((item) => item.financingFromTheBudgetOfTheMunicipality) as number[];
    let fundingFromExtrabudgetarySources = items.map((item) => item.fundingFromExtrabudgetarySources) as number[];

    return [srarf(federalBudget), srarf(budgetOfTheSubjectOfTheFederation), srarf(budgetOfTheMunicipality), srarf(fundingFromExtrabudgetarySources)]
  }

  if (status === 'completed' && items.length > 0) {
    const data = {
      labels: [
        'Финансирование из федерального бюджета', 'Финансирование из бюджета субъекта федерации',
        'Финансирование из бюджета муниципального образования', 'Финансирование из внебюджетных источников'],
      datasets: [
        {
          label: '',
          data: budgetData(items),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    return <Pie data={data} />
  } else {
    return <></>
  }
}
