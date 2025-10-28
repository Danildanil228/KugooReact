import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WatchAll } from './components/buttons/WatchAll'
import { PreOrder } from './components/buttons/PreOrder'
import { Order } from './components/buttons/Order'
import { ForCity } from './components/buttons/ForCity'
import { More } from './components/buttons/More'
import { Catologist } from './components/buttons/Catologist'
import { Everywhere } from './components/buttons/Everywhere'
import { Price } from './components/buttons/Price'
import { Service } from './components/buttons/Service'
import { Messengers } from './components/buttons/Messengers'
import { Phone } from './components/buttons/Phone'
import { Compare } from './components/buttons/Compare'
import { Share } from './components/buttons/Share'
import { BackCatalog } from './components/buttons/backCatalog'
import { CompareIcon } from './components/buttons/CompareIcon'
import { Heart } from './components/buttons/Heart'
import { Cart } from './components/buttons/Cart'
import { About } from './components/buttons/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WatchAll/>
      <PreOrder/>
      <Order/>
      <ForCity/>
      <More/>
      <Catologist/>
      <Everywhere/>
      <Price/>
      <Service/>
      <Messengers/>
      <Phone/>
      <Compare/>
      <Share/>
      <BackCatalog/>
      <CompareIcon/>
      <Heart/>
      <Cart/>
      <About/>
    </>
  )
}

export default App
