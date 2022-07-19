import React from 'react';

const ModalComponent = (props) => {
  const { hlOnShowModal, informationImg } = props
  console.log('informationImg: ', informationImg)
  return (
    <div id="myModal" class="modal">
      <div className="modal-content">
        <div className='content-header'>
          <h1 className='title-app'>{ informationImg.title }</h1>
          <button onClick={hlOnShowModal} className='App-button'>Close</button>
        </div>
        <hr className='line' />
    
        <div className='content-information'>
          <div className='content-principal-info'>
            <div>
              <p className='title-info'>Origin</p>
              <p className='text-info'>{ informationImg.place_of_origin }</p>
            </div>

            <div>
              <p className='title-info'>Artist</p>
              <p className='text-info'>{ informationImg.artist_display }</p>
            </div>

            <div>
              <p className='title-info'>Credit</p>
              <p className='text-info'>{ informationImg.credit_line }</p>
            </div>
          </div>

          <div className='content-second-information'>
            <div>
              <p className='title-info'>Publication History</p>
              <p className='text-info'>
                { informationImg.publication_history }
              </p>
            </div>
            <div>
              <p className='title-info'>Exhibition History</p>
              <p className='text-info'>
                { informationImg.medium_display }
              </p>
            </div>
            <div>
              <p className='title-info'>Provenance</p>
              <p className='text-info'>
                { informationImg.provenance_text }
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ModalComponent
