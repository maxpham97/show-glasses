import React from 'react'
import './index.css'

interface IPiece {
    rank:number,
    file:number,
    piece:string
}

const Piece = ({file,piece,rank} :IPiece) => {


    console.log('piece', piece)


  return (
    <div className={`piece ${piece} p-${rank}${file}`}>Piece</div>
  )
}

export default Piece