import { useEffect } from 'react'
import { useLocalStorage, useSessionStorage } from '@/helpers/hooks'
import { css } from '@/styles'

const viewport = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export default function HomeTemplate() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkMode', true)
  const [value, setValue] = useSessionStorage('test-key', 0)

  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue)
  }

  useEffect(() => setDarkTheme(true))

  return (
    <>
      <main className={viewport()}>
        <button onClick={toggleTheme}>
          {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
        </button>
        <div>
          <p>Count: {value}</p>
          <button onClick={() => setValue((x: number) => x + 1)}>
            Increment
          </button>
          <button onClick={() => setValue((x: number) => x - 1)}>
            Decrement
          </button>
        </div>
      </main>
    </>
  )
}
