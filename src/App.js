import logo from './logo.svg';
import './App.css';
import { useState, useRef, createContext, useContext, useEffect } from 'react';
// import './styleChat.css'
import axios from 'axios';
import Login from './Components/Login'
const token = 'Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp2Y2p2Ym5mQGNlbWFpbC5jb20iLCJ1c2VyTmFtZSI6Im1vc3RhZmEiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MDcxMDAxMjUsImV4cCI6MTcxNDg3NjEyNX0.kZwoJsqhL2eEAl7HRAbz5PHihqjYORd5p9nuFcMevW0'
const objectsPost = [
  { id: 1, title: "mostafa", body: "this is body 1" },
  { id: 2, title: "ahmad", body: "this is body 2" },
  { id: 3, title: "click me", body: "this is body 3" },
  { id: 4, title: "mostafa", body: "this is body 4" },
  { id: 5, title: "mostafa", body: "this is body 5 " },
]
const Messages = [
  { id: 1, content: "mostafa", isSender: true },
  { id: 2, content: "hi mohamed", isSender: true },
  { id: 3, content: "Thanks for you jgo out from scholl", isSender: false },
  { id: 4, content: "welcome", isSender: true },
  { id: 5, content: "Bye.", isSender: true },
]
const objectsBtn = [
  {
    id: 1, title: "mostafa", extraContent: (<><p style={{ margin: "5px" }}>$$$</p><img src={"logo512.png"} style={{ objectFit: "cover", width: "100px" }} /></>)
  },
  {
    id: 2, title: "ahmad", extraContent: <><p style={{ margin: "5px" }}>****</p><img src={logo} style={{ objectFit: "cover", width: "100px" }} /></>
  },
  { id: 3, title: "click me", extraContent: <h1>mostafa</h1> },
  { id: 4, title: "mostafa", extraContent: <h1>k</h1> },
  { id: 5, title: "mostafa", extraContent: <h1>mostafa</h1> },
]
const Context = createContext(Messages);
function MyChat({ children, state }) {
  return (
    <div className='myChat'>
      {children}
      <MyTools state={state} />
    </div>
  )
}
function MyTools({ }) {
  const [CurrentMsgs, SetCurrentMsgs] = useContext(Context)
  const ref = useRef(null)
  const [LastMsg, setLastMsg] = useState("")
  function handle() {
    if (LastMsg) {
      SetCurrentMsgs([...CurrentMsgs, { id: CurrentMsgs.length, content: LastMsg, isSender: true }]);
      setLastMsg('');
    }
  }
  return (
    <div className='controller'>
      <button className='btnSend' onClick={handle}>send</button>
      <input ref={ref} type="text" placeholder='Aa' className='barText' value={LastMsg} onChange={(e) => setLastMsg(e.target.value)} />
    </div>
  )
}
function Message({ payload }) {
  return (
    <div className={`message ${payload.isSender ? "sended" : ""}`}>{payload.content}</div>
  )
}
// useEffect(() => {
//   axios.get('http://localhost:4023/api/users/', {
//     headers: {
//       'Authorization': token
//     }
//   }).then(res => console.log(res))
// }, []);
// const [CurrentMsgs, SetCurrentMsgs] = useState(Messages);

// const MsgJsx = CurrentMsgs.map((el) => {
//   return (
//     <Message payload={el} key={el.id} />
//   )
// })
/* <Context.Provider value={[CurrentMsgs, SetCurrentMsgs]}>
        <MyChat>
          {MsgJsx}
        </MyChat>
      </Context.Provider> */
function App() {
  // 
  return (
    <div className="App">
      <Login/>
    </div>
  );
}


export default App;
