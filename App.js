//add this code to App.js
import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appid: '39f70a53e0ae48f6bf460d8e78a178ed',
    channel: 'test',
  };
  const callbacks = {
    onEndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : (
    <></>
  );
};

export default App;
