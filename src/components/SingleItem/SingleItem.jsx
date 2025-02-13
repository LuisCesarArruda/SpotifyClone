import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css'

export const SingleItem = ({id, name, image, artist = undefined, idPath}) => {
  return (
    <Link to={`${idPath}/${id}`} className='singleItem'>
            <div className='singleItem-div-image-button'>
              <div className='singleItem-div-image'>
                <img className='singleItem-image' src={image} alt={`Imagem do Artista ${name}`}/>
              </div>
              <FontAwesomeIcon className='singleItem-icon' icon={faCirclePlay} />
            </div>
            <div className='singleItem-texts'>
              <div className='singleItem-2lines'>
                <p className='singleItem-textTitle '>{name}</p>
              </div>

              <p className='singleItem-type'>
                {artist ?? "Artista"}
              </p>

            </div>
          </Link>
  )
}

SingleItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  artist: PropTypes.string,
  idPath: PropTypes.string.isRequired
}
