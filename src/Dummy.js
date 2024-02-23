import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dummy = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <br></br>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <br></br>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dummy;