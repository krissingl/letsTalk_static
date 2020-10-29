import React, { useState } from 'react';
import ProgressChart from './progressChart.js';
import PromptBox from './prompts.js';

const ExtrasBox = ({ count }) => {

  const [goal, handleGoalChange] = useState(100);
  return (
  <div className="optionBox">
    <PromptBox />
    <div className="wordCountBox">
      <div>
        <h5>You can set a word count goal here:</h5>
        <input
          className="goalInput"
          placeholder="Place goal here! Default is 100"
          onChange={(event) => handleGoalChange(event.target.value)}
        />
      </div>
      <div className="progressChart">
        <ProgressChart goal={goal} count={count} />
      </div>
    </div>
  </div>
);
}

export default ExtrasBox;
