import React, { useState, useEffect } from 'react';
import ModalComponent from '../components/Modal';
import { useArtList } from './../hooks/useArtList'
import InfiniteScroll from 'react-infinite-scroll-component';

const ArtList = ({ scrollContainer }) => {
  const [showModal, setShowModal] = useState(false)
  const [informationImg, setInformationImg] = useState({})
  const { getAllList, allInformation, pagination } = useArtList()
  const [newArray, setNewArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getAllList(currentPage, 50)
    setNewArray(allInformation)
  }, [])

  const hlOnShowModal = (item) => {
    setInformationImg(item)
    setShowModal(!showModal)
  }

  const fetchMoreData = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      if (pagination.total_pages >= pagination.current_page) {
        getAllList(currentPage, 50)
        setNewArray(newArray.concat(allInformation))
      }
    }, 1500);
  }

  return (
    <>
      {
        showModal ? <ModalComponent hlOnShowModal={hlOnShowModal} informationImg={informationImg} /> : null
      }
      <div className='content-app'>
        <div className='content-header'>
          <h1 className='title-app'>Infinity Art</h1>
          <p className='title-app'>{ pagination.total }</p>
        </div>
        <hr className='line' />

        <div className='content-img'>
          <InfiniteScroll
            dataLength={newArray.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {
              !newArray ? <div>Loader....</div> :
              newArray.map((item, index) => {
                return (
                  <button key={index} className='withous-style' onClick={() => hlOnShowModal(item)}>
                    <img className='img' src={require("./../assets/1.jpg")} alt={item.artist_display} />
                  </button>
                )
              })
            }
          </InfiniteScroll>
          
        </div>
      </div>
    </>
  )
}

export default ArtList
