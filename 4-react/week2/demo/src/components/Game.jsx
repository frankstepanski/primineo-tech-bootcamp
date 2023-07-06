import React, {useState} from 'react'
import { calculateWinner } from '../utils/helpers'
import Board from './board.jsx'

/*
    Component Composition:
        - components can be composed of other components
        - this allows us to create reusable components
        - this allows us to create components that are easier to read and maintain
*/


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true) 
    const winner = calculateWinner(board)

    // passed down to the Board component
    const handleClick = () => {
        console.log('clicked')
    }






    const renderMoves = () => {

    }

    return (
        <>
            <Board squares = {board} onClick={handleClick}/>
        </>
    )
}

export default Game;