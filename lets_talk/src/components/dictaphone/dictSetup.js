import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = ({ onCountChange }) => {
  const {
    transcript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition();
  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
      let words = finalTranscript.split(' ');
      const currentWordCount = words.length;
      onCountChange(currentWordCount);
    }
  }, [onCountChange, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <div className="speechControlBox">
        <span className="listeningSpan">
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div className="resetAndSaveBox">
          <button type="button" className="resetAndSaveBtn" onClick={() => { resetTranscript(); onCountChange(0); }}>Reset</button>
        </div>
      </div>
      <div className="wordsBox">
        <span className="words">{transcript}</span>
      </div>
    </div>
  );
};

export default Dictaphone;
