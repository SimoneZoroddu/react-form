import { use, useState } from "react"



export default function AppMain() {
    const arrayArticles = ['']

    const [value, setValue] = useState('')
    const [valueSaved, setValueSaved] = useState(arrayArticles)




    function changeValue(e) {
        e.preventDefault()
        setValueSaved([value, ...valueSaved])
    }

    return (
        <>
            <form action="" onSubmit={changeValue}>
                <input type="text" placeholder="Titolo da inserire nell articolo" value={value} onChange={(e) => setValue(e.target.value)} />
            </form>
            {
                valueSaved.map((article, index) => (
                    <article key={index}>
                        <h1>{article}</h1>
                    </article>

                ))
            }
            <article>
                <h1>Titolo</h1>
            </article>
            <article>
                <h1>Titolo</h1>
            </article>
            <article>
                <h1>Titolo</h1>
            </article>

        </>
    )
}