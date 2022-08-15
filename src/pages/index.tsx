import React from 'react'
import { Weather } from '../types/weather'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Search from '../components/search'

const Home: NextPage = () => {
  return (
    <div>
      <Search />
    </div>
  )
}
export default Home;

