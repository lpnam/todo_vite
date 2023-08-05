import React from 'react'
import { iconClock, iconView, iconEthereum, avatar, equilibrium } from '../images/image_index.js'

function CardETH() {
  return (
    <div className="w-full h-3/4 bg-darkBlueMainBG flex justify-center p-4">
        <div className="w-card p-8 border border-red-500 rounded-lg bg-darkBlueCardBG">
            <img className="w-full" src={equilibrium} alt="equilibrium"/>
        </div>
    </div>
  )
}

export default CardETH