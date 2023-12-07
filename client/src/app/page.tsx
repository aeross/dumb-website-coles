import Image from 'next/image'
import Cards from './(components)/CardsProduct'
import Banner from './(components)/Banner'
import Nav from './(components)/Nav'
import Footer from './(components)/Footer'

export default function Home() {
  

  return (<>
    <Banner />
    <h1 className="heading-sm">Featured</h1>
    <Cards />
  </>)
}
