import { useState } from "react";


export default function MyForm() {
    const [dataForm, setDataForm] = useState({
        username: "",
        email: "",
        age: Number,
        isStudent: Boolean
    })
    function handelName(e) {
        setDataForm({ ...dataForm, username: e.target.value })
    }
    function handelEmail(e) {
        setDataForm({ ...dataForm, email: e.target.value })
    }
    function handelAge(e) {
        setDataForm({ ...dataForm, age: e.target.value })
    }
    function handelStudent(e) {
        setDataForm({ ...dataForm, isStudent: e.target.checked })
    }
    return (
        <form style={{ background: "green", padding: "10px" }} onSubmit={(e)=>{e.preventDefault();console.log(dataForm);}}>
            <label >Username</label>
            <input type="text" value={dataForm.username} onChange={handelName} /><br />
            <label >email</label>
            <input type="text" value={dataForm.email} onChange={handelEmail} /><br />
            <label >Age</label>
            <input type="number" value={dataForm.age} onChange={handelAge} /><br />
            <label>Are you Student?</label>
            <input type="checkbox" checked={dataForm.isStudent} onChange={handelStudent} /><br/>
            <button>Confrim</button>
        </form>
    )
}

