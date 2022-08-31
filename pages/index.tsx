import type { NextPage } from 'next'
import HomeHero from '../components/sections/home_hero'

const Home: NextPage = () => {

  // const [mousePosition, setMousePosition] = useState({ x: -20, y: -20 });

  return (
    <div>
      <HomeHero />
      <div className='h-screen'>
        bla bla
      </div>
    </div>
  )
}

export default Home
