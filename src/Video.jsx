// import React, { useState, useEffect } from 'react';
// import SimplePeer from 'simple-peer';

// const Peer = () => {
//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStream, setRemoteStream] = useState(null);
//   const [peer, setPeer] = useState(null);

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       setLocalStream(stream);

//       const newPeer = new SimplePeer({
//         initiator: true,
//         trickle: false,
//         stream: stream,
//       });

//       newPeer.on('signal', (data) => {
//         // Send the signaling data to the remote peer
//       });

//       newPeer.on('stream', (remoteStream) => {
//         setRemoteStream(remoteStream);
//       });

//       setPeer(newPeer);
//     });
//   }, []);

//   return (
//     <div>
//       {localStream && (
//         <VideoChat localStream={localStream} remoteStream={remoteStream} />
//       )}
//     </div>
//   );
// };

// const VideoChat = ({ localStream, remoteStream }) => {
//   const localVideoRef = React.useRef(null);
//   const remoteVideoRef = React.useRef(null);

//   useEffect(() => {
//     if (localStream) {
//       localVideoRef.current.srcObject = localStream;
//     }
//   }, [localStream]);

//   useEffect(() => {
//     if (remoteStream) {
//       remoteVideoRef.current.srcObject = remoteStream;
//     }
//   }, [remoteStream]);

//   return (
//     <div>
//       <video ref={localVideoRef} autoPlay muted />
//       <video ref={remoteVideoRef} autoPlay />
//     </div>
//   );
// };

// export default Peer;
import React from 'react'

export const Video = () => {
  return (
    <div>Video</div>
  )
}
