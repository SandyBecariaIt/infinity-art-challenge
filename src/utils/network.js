const url = 'https://api.artic.edu/api/v1'

export function buildRequest(uri, method) {
  return new Request(`${url}${uri}`, {
    method: method,
    redirect: 'follow'
  })
}