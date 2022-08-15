import React from 'react'
import { Weather } from '../types/weather'
import type { NextPage, GetServerSideProps } from 'next'
import Search from '../components/search'
import start from '../assets/start'
import Clear from '../assets/Clear'
import Clouds from '../assets/Clouds'
import Rain from '../assets/Rain'
import Head from 'next/head'



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const city = (params.city as string) ?? ''

	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`);
	const data = await res.json() as Weather;

	return {
		props: {
			data
		}
	}
}

interface APIResponse {
	data: Weather
}

const Home: NextPage<APIResponse> = ({ data }) => {
	console.log(data)

	let c: React.ReactNode | null = null;


	if (data.weather[0].main === "Rain") {
		c = <Rain width={100} />

	}

	else if (data.weather[0].main === "Clouds") {
		c = <Clouds width={100} />
	}
	else if (data.weather[0].main === "Clear") {
		c = <Clear width={100} />
	}


	return (
			
						<div className='w-full '>
							< Search />
							{/* {data && <p>{JSON.stringify(data.name)}</p>} */}
							<div className="flex flex-col  ">
								<h1 className="font-bold flex justify-center text-7xl pt-64 pb-20">{data.name}</h1>
								<h2 className="max-w-xs mx-auto font-black text-5xl pb-10">{data.main.temp}° C</h2>
								<h3 className="max-w-xs mx-auto font-black text-5xl pb-10">{c}</h3>

							</div>
						</div>
					)
}
					export default Home;

