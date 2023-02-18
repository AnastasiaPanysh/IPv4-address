import style from "./Page.module.css"

import axios from 'axios';

function Page() {

    const request = async () => {
         const data = await axios.get('https://api.ipify.org/?format=json')
         console.log(data);
     }
    
    return (
        <div>
            <h1>37.215.53.63</h1>
            <p onClick={request}>37.215.53.63 ( This is your IP address...probably :P )</p>
        </div>
    )

}

export default Page;