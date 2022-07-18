import { buildRequest } from './network'
import './../styles/global-styles.css'

export async function getListImg () {
    const request = buildRequest('/artworks', 'GET')
    const response = await fetch(request)
    console.log('response: ', response.json())
    const data = response.ok ? await response.json() : undefined
    return data
  }
