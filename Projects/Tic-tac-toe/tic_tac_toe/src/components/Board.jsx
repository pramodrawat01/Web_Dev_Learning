
import Squre from "./Square"
import { useState } from "react"

function Board(){

    const[squares, setSquares] = useState(Array(9).fill(""))   // array of 9 element 
    const[turn, setTurn]= useState(true)              // track turns 

    // to handle click
    const onSquare = (index) => {
        if(squares[index] !== "") return;
        const newSquares = [...squares];


        newSquares[index] = turn ? "X" : "O"
        setSquares(newSquares)     // update the state with newSquares
        setTurn(!turn)       // switch turn

    }
    function onReset(){
        setSquares(Array(9).fill(''))
        setTurn(true)
    }

    return (
        <div className="board">
            {
                squares.map( (value, index) => {
                return <Squre key={index} value={value} onClick={()=>{onSquare(index)}}></Squre>
            })
        }
        <button onClick={onReset}>
            Reset
        </button>
        </div>

        
    )
}

export default Board