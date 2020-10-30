import React from 'react';

const Launch = ({ changePage }) => (
  <div className="homeTitle">
    <h4>WELCOME TO</h4>
    <h1>LET'S TALK</h1>
    <p className="homeSummary">
      Would you like some practice speaking for social settings?
      <br />
      Small talk, telling stories, interviewing for a job? Talk to me and let's practice!
      <br />
      Click the teacup to began!
    </p>
    <div onClick={() => { changePage('spillTea'); }} className="imgDiv">
        <img className="teacup" src="https://lets-talk-environment.s3-us-west-1.amazonaws.com/logos/teaCup.png" alt="teacup" />
    </div>
  </div>
);

export default Launch;