import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count, setCount] = useState(0)
  
    const incCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = `count is ${count}`
  }, [count])
  return (
    <>
    <p>{count}</p>
    <button onClick={incCount}>++</button>
    </>
  )
}

export default UseEffect