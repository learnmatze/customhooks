import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetcher from "./common/components/DataFetcher.tsx";

function App() {

  return (
    <>
      <h2>Custom Hooks</h2>
        <DataFetcher></DataFetcher>
    </>
  )
}

export default App