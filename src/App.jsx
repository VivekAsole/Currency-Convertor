import useCurrencyData from "./hooks/useCurrencyData"
import Element from "./components/Element"
import { useState } from "react"

function App() {

  const [convertedValue, setConvertedValue] = useState(0)
  const [convertingCurrency, setConvertingCurrency] = useState("inr")
  const [convertedCurrency, setConvertedCurrency] = useState('usd')


  const data = useCurrencyData(convertingCurrency)
  const currencyArray = Object.keys(data)

  const swap = () => {
    setConvertedCurrency(convertingCurrency)
    setConvertingCurrency(convertedCurrency)
  }

  return (

    <>
      <div className="w-full h-screen flex items-center justify-center bg-cover bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png')]">
        <div className="text-center">

          <Element
            currencyArray={currencyArray}
            valueUpdated={setConvertedValue}
            currencyUpdated={setConvertingCurrency}
            defaultCurrency={convertingCurrency}
          ></Element>

          <div className="bg-green-400 mt-4 mb-4 w-52 rounded-lg text-2xl">
            <button
              className="text-white font-bold w-full"
              onClick={swap}
            >$ SWAP $</button>
          </div>

          <Element
            defaultCurrency={convertedCurrency}
            currencyArray={currencyArray}
            currencyUpdated={setConvertedCurrency}
            value={data[convertedCurrency] * convertedValue}
          />

        </div>
      </div>
    </>
  )

}

export default App
