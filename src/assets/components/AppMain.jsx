import { use, useState } from "react"



export default function AppMain() {



    const [value, setValue] = useState('')
    const [valueSaved, setValueSaved] = useState([])


    function changeValue(e) {
        e.preventDefault()
        setValueSaved([value, ...valueSaved])
        setValue('')
    }

    function filteredArray(indexMap) {
        const newArrayFiltered = valueSaved.filter((singleValue, index) => index !== indexMap)
        setValueSaved(newArrayFiltered);

    }





    
    const [boolean, setBoolean] = useState(false)


    function changeName() {
        if (boolean == true) {
            setBoolean(false)
        } else {

            setBoolean(true)
        }
    }


    const [newValue, setnewValue] = useState('')



    return (
        <>
            <div className="container d-flex justify-content-center my-5">
                <form action="" onSubmit={changeValue} className="text-center">
                    <input className="input-group-text" type="text" placeholder="Titolo per l'articolo" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button className="btn btn-secondary mt-2">Add</button>
                </form>
            </div>
            <div className="container text-center">
                {
                    valueSaved.length >= 1 && valueSaved.map((article, index) => (
                        <article key={index} className="d-flex justify-content-center" >
                            {boolean
                                ?
                                <input className="input-group-text" type="text" placeholder={article} value={newValue} onChange={(e) => setnewValue(e.target.value)} />
                                :
                                <>
                                    {   newValue
                                        ?
                                        <h1>{newValue}</h1>
                                        :
                                        <h1>{article}</h1>
                                    }
                                </>
                            }
                            <button className="btn btn-danger m-2" onClick={() => filteredArray(index)}>🗑️</button>
                            <button className="btn btn-primary m-2" onClick={() => changeName(index)}>📝</button>
                        </article>

                    ))
                }
            </div>
        </>
    )
}