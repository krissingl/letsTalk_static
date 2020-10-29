import React, { useState } from 'react';
import Dictaphone from './dictSetup.js';

const DictaphoneWidget = ({ onCountChange }) => {
  const [message] = useState('');
  return (
    <div>
      <p>{message}</p>
      <Dictaphone
        onCountChange={onCountChange}
      />
    </div>
  );
};

export default DictaphoneWidget;
