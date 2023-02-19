import style from "./App.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

function Page() {
  const [ip, setIP] = useState()

  async function request() {
    const response = await axios.get('https://api.ipify.org/?format=json')
    setIP(response.data.ip)
  }

  useEffect(() => {
    request()
  })

  return (
    <div>
      <h1>{ip ? ip : '...'}</h1>
      <p>  This is your {ip}IP address probably :P </p>
    </div>
  )


}

export default Page;