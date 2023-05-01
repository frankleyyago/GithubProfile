import { useState, useEffect } from "react"

const Form = () => {
    const [gradeA, setGradeA] = useState(0)
    const [gradeB, setGradeB] = useState(0)
    const [gradeC, setGradeC] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('o componente iniciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log('o estado mudou')
    }, [name])

    useEffect(() => {
        console.log('a materia A mudou para: ' + gradeA)
    }, [gradeA])

    const changeName = (event) => {
        setName(formerState => {
            return event.target.value
        })
    }

    const resultRender = () => {
        const sum = gradeA + gradeB + gradeC
        const average = sum / 3

        if (average >= 7) {
            return (
                <p>Olá {name}, você foi aprovado</p>
            )
        } else {
            return(
                <p>Olá {name}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={changeName} />
            <input type="number" placeholder="Nota materia A" onChange={event => setGradeA(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={event => setGradeB(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={event => setGradeC(parseInt(event.target.value))} />
            {resultRender()}
        </form>
    )
}

export default Form