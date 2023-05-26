import {useState} from "react"

type Searchprops = {
    fetchBothAPIs: (search: string) => void
}

export default function Search(props: Searchprops) {
    const [location, setLocation] = useState("")
    
    return (
    <div>
        <input type = "text" onChange = {(e) => {setLocation (e.target.value)}} placeholder="Enter location"></input>
        <button type = "submit" onClick={() => {props.fetchBothAPIs(location)}}>Search</button>
    </div>
    )
}