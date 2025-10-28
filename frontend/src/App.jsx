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
    </>
  )
}

export default App
