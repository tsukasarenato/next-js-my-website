import { NextPage } from 'next'
import Footer from '../components/footer'
import HeadCustom from '../components/head'
import MenuBar from '../components/menubar'

const About: NextPage = () => {
  
  const page = "/about"

  return (
    <>
      <HeadCustom />
      <MenuBar page={page} />
      <h1 className="text-3xl font-bold underline">Content</h1>
      <Footer />
    </>
  )
}

export default About
