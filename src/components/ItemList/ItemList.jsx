import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export const ItemList = () => {
  return (
    <div className='main'>
      <div className='itemList'>

        <div className='itemList-header'>

          <h2>Artistas Populares</h2>
          <a className='itemList-link' href="/">mostrar tudo</a>

        </div>


        <div className='itemList-container'>
          <div className='singleItem'>
            <div className='singleItem-div-image-button'>
              <div className='singleItem-div-image'>
                <img className='singleItem-image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="imagem do artista X"/>
              </div>
              <FontAwesomeIcon className='singleItem-icon' icon={faCirclePlay} />
            </div>
            <div className='singleItem-texts'>
              <div className='singleItem-2lines'>
                <p className='singleItem-textTitle '>Henrique & Juliano</p>
              </div>

              <p className='singleItem-type'>artista</p>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}




