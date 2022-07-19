import { buildRequest } from './network'
import './../styles/global-styles.css'

export async function getListImg (page, limit) {
    const request = buildRequest(`/artworks?page=1&limit=50`, 'GET')
    const response = await fetch(request)
    const data = response.ok ? await response.json() : undefined
    return data
  }
