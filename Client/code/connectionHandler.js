let url = "http://localhost:3000/"

export async function loadStateServer () {
  let result = (await fetch(url + "api/data/" + "datakey" + "?api-key=c4game")).json()
  return result
}


export function saveStateServer (state) {
  fetch(url + "api/data/" + "datakey" + "?api-key=c4game", {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(state)
      })
}

export function saveState (state) {
  localStorage.setItem("gameState", JSON.stringify(state))
}

export function loadState () {
  let result = JSON.parse(localStorage.getItem("gameState"))
  return result
}