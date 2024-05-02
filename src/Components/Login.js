import { useState, createContext, useContext, useEffect } from 'react';
import logo from '../logo.svg';
import axios from 'axios';

const Form = createContext('Ahmed');
function MyInput(props) {
    const [state, setState] = useContext(Form);
    function handle(e) {
        return setState({ ...state, [props.className]: (e.target.type === 'checkbox' ? e.target.checked : e.target.value) });
    }
    if (props.type == 'checkbox') return (<input {...props} checked={state[props.className]} onChange={handle} />)
    return (<input {...props} value={state[props.className]} onChange={handle} required />)
}

class Request {
    constructor(url) {
        this.url = url;
    }
    Post(body, config) { return axios.post(this.url, { ...body, ...config }).then(res => console.log(res.data.data.user)) }
    Get(config) { return axios.get(this.url, { ...config }) }
    Patch(body, config) { return axios.patch(this.url, { body, config }) }
    Delete(body, config) { return axios.delete(this.url, { ...config }) }
}


export default function SignUp() {
    const token = 'Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp2anZibmZAY2VtYWlsLmNvbSIsInVzZXJOYW1lIjoibW9zdGFmYSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNzA3MDk3OTgzLCJleHAiOjE3MTQ4NzM5ODN9.RBxkno0hOlK8EzW9FKyHhxx6_CgEpfPRPVd5FW6N3U4'
    const config = {
        headers: {
            'Authorization': token
        }
    }
    const Apilogin = new Request('http://localhost:4023/api/users/login')
    const [dataForm, setDataForm] = useState({
        userName: 'mostfa',
        email: 'jak@email.com',
        password: 'GoMar30f50',
        IsStudent: false,
        File: logo.split('/')[logo.split('/').length - 1]
    });
    function Submit(e) {
        e.preventDefault();
        console.log(dataForm, config);
        console.log(Apilogin.Post(dataForm, config));
    }
    return (
        <div className="container">
            <form onSubmit={Submit}>
                <h1 className='textHead'>Sign Up</h1>
                <Form.Provider value={[dataForm, setDataForm]}>
                    <MyInput type="text" className="userName" placeholder='Username' minLength={3} maxLength={16} />
                    <MyInput type="email" className="email" placeholder='Email' />
                    <MyInput type="password" className="password" placeholder='Password' minLength={8} />
                    <div style={{ margin: 'auto' }}>
                        <label style={{ marginRight: '5px' }}>Are you Student?</label>
                        <MyInput type="checkbox" className='IsStudent' />
                    </div>
                </Form.Provider>
                <button className='btnSend'>Submit</button>
            </form>
        </div>
    )
}
