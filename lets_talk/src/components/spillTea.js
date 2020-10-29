import React, { useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import DictaphoneWidget from './dictaphone/dictWidget.js';
import ExtrasBox from './extrasBox.js';

const SpillTea = () => {
  const [count, handleCountChange] = useState(0);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };
  return (
    <div>
      <h2 className="titleBuffer">Have Some Tea and Let's Talk</h2>
      <div>
        <ExtrasBox count={count} />
      </div>
      <div>
        <DictaphoneWidget onCountChange={handleCountChange} />
      </div>
      <div className="listenBtnsBox">
        <button type="button" className="listenBtns" onClick={listenContinuously}>Listen</button>
        <button type="button" className="listenBtns" onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
    </div>
  );
};

export default SpillTea;
