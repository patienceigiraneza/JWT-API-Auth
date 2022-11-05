import { useState } from "react";
import axios from 'axios';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handle = (e) => {
        e.preventDefault();
        const dat = {
            username: username,
            password: password
        }
        axios.post('http://127.0.0.1:8000/login/', dat)
            .then((data) => {
                console.log(data)

            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <form onSubmit={handle} method="POST">

            <h3> Login </h3>
            Username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /> <br />
            Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /> <br />
            <input type="submit" />
            </form>
        </>
    );
}
export default Login;
