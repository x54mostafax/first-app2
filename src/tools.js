
export default function MyTools(params) {
    const [CurrentMsgs, SetCurrentMsgs] = useState(Messages);
    const ref = useRef(null)
    const [LastMsg, setLastMsg] = useState("")
    console.log(ref, "refer");
    function handle() {
        if (LastMsg) {
            SetCurrentMsgs([...CurrentMsgs, { id: CurrentMsgs.length, content: LastMsg, isSender: true }]);
            setLastMsg('');
            console.log(CurrentMsgs, "afterUpdate");
        }
    }
    return (
        <Context.Consumer>
            <div className='controller'>
                <button className='btnSend' onClick={handle}>send</button>
                <input ref={ref} type="text" placeholder='Aa' className='barText' value={LastMsg} onChange={(e) => setLastMsg(e.target.value)} />
            </div>
        </Context.Consumer>
    )
}