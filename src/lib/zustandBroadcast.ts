/* eslint-disable @typescript-eslint/no-explicit-any */
function filterObject(object: any, filter: any) {
  const array = Object.entries(object)
  const filtered = array.filter(([key, value]) => filter(value, key))
  return Object.fromEntries(filtered)
}

export default function broadcast(store: any, id = 'zustand-broadcast') {
  if ('BroadcastChannel' in globalThis) {
    let justReceived = false
    const channel = new BroadcastChannel(id)

    channel.onmessage = ({ data: state }) => {
      justReceived = true
      store.setState(state)
      justReceived = false
    }

    store.subscribe((state: any) => {
      if (justReceived === false) {
        channel.postMessage(
          filterObject(state, (v: any) => typeof v !== 'function')
        )
      }
    })
  }
}
