import { useState } from "react"



export default function AppMain() {

    const [value, setValue] = useState('')

    function changeValue(e) {
        e.preventDefault()

    }

    return (
        <>
            <article>
                <h1>Titolo</h1>
            </article>
            <article>
                <h1>Titolo</h1>
            </article>
            <article>
                <h1>Titolo</h1>
            </article>
            <article>
                <h1>Titolo</h1>
            </article>

            <form action="" onSubmit={changeValue}>
                <input type="text" placeholder="Titolo da inserire nell articolo" value={value} onChange={(e) => setValue(e.target.value)}/>
            </form>
        </>
    )
}