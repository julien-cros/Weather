import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {BsSearch} from 'react-icons/bs'


export default function Home() {
  const[city, setCity] = useState('');
  const[weather, setWeather] = useState(null);
  const[loading , setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`

  const fetchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    setLoading(true)

    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })

    setCity('')
    setLoading(false)
  }

  useEffect(() => console.log(weather), [weather])

  return (
    <div>
      <Head>
        <title>Weather </title>
        <meta name="description" content="My weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={fetchWeather}>Fetch data</button>

    </div>
  )
}
