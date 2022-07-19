import { useState } from 'react';
import * as api from './../utils/index' 

export const useArtList = () => {
  const [allInformation, setAllInformation] = useState([])
  const [pagination, setPagination] = useState({})

  const getAllList = async (page, limit) => {
    const data = await api.getListImg(page, limit)
    setAllInformation(data.data)
    setPagination(data.pagination)
  }

  return {
    pagination,
    getAllList,
    allInformation
  }
}
