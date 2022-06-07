import axios from "axios"
import { useState } from "react"

const AnimalForm =(props)=>{
    const [name, setName]= useState('')
    const [age, setAge]= useState(0)
    const [species, setSpecies]= useState('')
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log({name, age, species})
        try{
            let res = await axios.post('/api/animals',{name, age, species})
            console.log(res.data)
            props.addAnimal(res.data)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>species</p>
                <input value={species} onChange={(e)=>setSpecies(e.target.value)} />
                <p>age</p>
                <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AnimalForm;