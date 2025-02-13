import React from 'react'
import './style.css'
import { SingleItem } from '../SingleItem/SingleItem'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const ItemList = ({title, items, itemsArray, path,individualPath}) => {

  return (
      <div className='itemList'>

        <div className='itemList-header'>

          <h2>{title} Populares</h2>
          <Link className='itemList-link' to={path}>mostrar tudo</Link>

        </div>

        <div className='itemList-container'>
          {itemsArray.filter((_,index) =>{
            return index < items
          }).map((currobj, index) => {
              return (
              <SingleItem
                idPath = {individualPath}
                {...currobj}
                key={`${title}-${index}`}
              />
            )})}
        </div>

      </div>

  )
}

ItemList.propTypes ={
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.array,
  path: PropTypes.string.isRequired,
  individualPath: PropTypes.string.isRequired
}



