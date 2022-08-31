import type { NextPage } from 'next'
import HomeHero from '../components/sections/home_hero'
import Projects from '../components/sections/projects'

const Home: NextPage = () => {

  // const [mousePosition, setMousePosition] = useState({ x: -20, y: -20 });

  return (
    <div>
      <HomeHero />
      <Projects />
    </div>
  )
}

export default Home
