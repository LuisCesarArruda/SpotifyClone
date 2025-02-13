import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { artistArray } from '../../database/artists'
import { songsArray } from '../../database/songs'
import './style.css'

export const Main = () => {
  return (
    <div className='main'>
      <ItemList
        title = "Artistas"
        items = {6}
        itemsArray={artistArray}
        path = "/artists"
        individualPath={"/artist"}
      />

      <ItemList
        title = "Músicas"
        items = {14}
        itemsArray={songsArray}
        path ="/songs"
        individualPath ="/song"
      />
    </div>
  )
}
