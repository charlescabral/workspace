export default function playFile<T>(filepath: string | null): T | undefined {
  const context = new window.AudioContext()
  try {
    if (filepath) {
      fetch(filepath)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          const soundSource = context.createBufferSource()
          soundSource.buffer = audioBuffer
          soundSource.connect(context.destination)
          soundSource.start()
        })
    }
  } catch {
    console.error('parsing error on', { filepath })
    return undefined
  }
}
