import React from 'react';

const ModalComponent = (props) => {
  const { hlOnShowModal } = props
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <div className='content-header'>
          <h1 className='title-app'>Title Art</h1>
          <button onClick={hlOnShowModal} className='App-button'>Close</button>
        </div>
        <hr className='line' />
    
        <div className='content-information'>
          <div className='content-principal-info'>
            <div>
              <p className='title-info'>Origin</p>
              <p className='text-info'>France</p>
            </div>

            <div>
              <p className='title-info'>Artist</p>
              <p className='text-info'>Artista desconocidi</p>
            </div>

            <div>
              <p className='title-info'>Credit</p>
              <p className='text-info'>Credito....</p>
            </div>
          </div>

          <div className='content-second-information'>
            <div>
              <p className='title-info'>Publication History</p>
              <p className='text-info'>
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
              </p>
            </div>
            <div>
              <p className='title-info'>Exhibition History</p>
              <p className='text-info'>
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
              </p>
            </div>
            <div>
              <p className='title-info'>Provenance</p>
              <p className='text-info'>
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
                sdkjnkjvnfcdjkvfjkgnfdkjngvdcsdkjnkjvnfcdjkvfjkgnfdkjngvdc
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ModalComponent
