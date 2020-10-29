import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const ProgressChart = ({ goal, count }) => {
  const progress = count / goal;
  const percentage = ( count / goal ) * 100;
  console.log(`Progress: ${progress} Percentage: ${percentage}`);

  return (
    <CircularProgressbar
      value={progress}
      maxValue={1}
      text={`${percentage.toFixed(1)}%`}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'butt',
        textSize: '14px',
        pathColor: 'olivedrab',
        textColor: 'darkolivegreen',
        trailColor: '#d6d6d6',
      })}
    />
  );
};

export default ProgressChart;
