import React, { useState } from 'react';
import ModalComponent from '../components/Modal';

const ArtList = () => {
  const [showModal, setShowModal] = useState(false)

  const hlOnShowModal = () => {
    console.log('Hola')
    setShowModal(!showModal)
  }
  return (
    <>
      {
        showModal ? <ModalComponent hlOnShowModal={hlOnShowModal} /> : null
      }
      <div className='content-app'>
        <div className='content-header'>
          <h1 className='title-app'>Infinity Art</h1>
          <p className='title-app'>25</p>
        </div>
        <hr className='line' />

        <div className='content-img'>
          <button className='withous-style' onClick={hlOnShowModal}>
            <img className='img' src={require("./../assets/1.jpg")} alt="" />
          </button>

          <a>
            <img className='img' src={require("./../assets/2.jpg")} alt="" />
          </a>

          <a>
            <img className='img' src={require("./../assets/3.jpg")} alt="" />
          </a>

          <a>
            <img className='img' src={require('./../assets/4.jpg')} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ArtList
