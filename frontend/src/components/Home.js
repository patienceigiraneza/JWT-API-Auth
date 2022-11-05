import { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/')
            .then(data => {
                setData(data.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <a href="/login"> Login </a> <br /><br />
            <table border="1px">
            <tr>
                <th>#</th>
                <th>name</th>
                <th>Type</th>
                <th>Description</th>
                <th>action</th>
            </tr>
            {data.map(item => {
                return (
                    <>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td><a href="/"> Edit </a> </td>
                        </tr>
                    </>
                )
            })}
            </table>



        </>
    );
}
export default Home;
