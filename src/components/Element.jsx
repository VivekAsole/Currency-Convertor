
export default function Element({ currencyArray, value, valueUpdated, currencyUpdated, defaultCurrency }) {


    return <>
        <div className="flex justify-around text-2xl bg-blue-100 bg-opacity-80">
            <div className="m-4 p-4 font-bold">
                <label className="mr-4 text-blue-900">Amount</label>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => valueUpdated(e.target.value)}
                />
            </div>
            <div className="m-4 p-4 font-bold">
                <label className="mr-4 text-blue-800" >Currency</label>
                <select
                    onChange={(e) => currencyUpdated(e.target.value)}>
                    {
                        currencyArray.map((ele) => (
                            <option
                                key={ele}
                                value={ele}
                                selected={defaultCurrency === ele}
                            >{ele}</option>
                        )
                        )
                    }
                </select>
            </div>
        </div>
    </>
}