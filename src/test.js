// function MyHeader() {
//     return (
//         <header className={"bgGreen header"}>
//             <h1>My Header</h1>
//         </header>
//     )
// }
// function Main() {
//     return (
//         <main className={"main"}>
//             <MyPoster >
//                 {JsxPosts}
//             </MyPoster >
//             <MySide>
//                 {JsxBtns}
//             </MySide>
//         </main>
//     )
// }
// function MyPoster({ children }) {
//     return (
//         <div className={"poster "}>
//             {children}
//         </div>
//     )
// }

// function MyPost({ titleText, body }) {
//     return (
//         <div className={"post bdG"}>
//             <h1>{titleText}</h1>
//             <div className={"hr"}></div>
//             <p>{body}</p>
//         </div>
//     )
// }

// function MySide({ children }) {
//     return (
//         <div className={"bdG side"}>
//             {children}
//         </div>
//     )
// }
// function MyButton({ children, Text }) {
//     return (
//         <div>
//             <button className={"btn"}>{Text}</button>
//             {children}
//         </div>
//     )
// }
// function MYInput2() {
//     function MYInput() {
//         console.log("from input");
//         const [value, setvalue] = useState("")
//         function handle(e) {
//             console.log("handle");
//             console.log(e);
//             setvalue(e.target.value)
//         }
//         return (
//             <div className='bgGreen'>
//                 <label for="in">name</label><br />
//                 <input type="text" id="in" value={value} onChange={handle} />
//             </div>)
//     }

//     return MYInput()
// }
// function Challenge() {
//     const [dataChallenge, setDataChallenge] = useState({
//         score: 0,
//         email: "",
//         username: ""
//     })
//     function handelName(e) {
//         setDataChallenge({ ...dataChallenge, username: e.target.value })
//     }
//     function handelEmail(e) {
//         setDataChallenge({ ...dataChallenge, email: e.target.value })
//     }
//     function handelBtn(e) {
//         setDataChallenge({ ...dataChallenge, score: ++dataChallenge.score })
//     }
//     return (
//         <>
//             <label>score:  <span>{dataChallenge.score}</span> </label>
//             <button onClick={handelBtn}>+1</button><br />
//             <label>Username</label>
//             <label >Username</label>
//             <input type="text" value={dataChallenge.username} onChange={handelName} /><br />
//             <label >email</label>
//             <input type="text" value={dataChallenge.email} onChange={handelEmail} /><br />
//         </>
//     )
// }