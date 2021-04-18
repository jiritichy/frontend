import { useState, useEffect } from 'react'
import ThreadCard from './ThreadCard'

const Home = () => {
  const [threads, setThreads] = useState([])
  const server = process.env.REACT_APP_API_SERVER

  // TODO search for posts
  useEffect(() => {
    const foo = async () => {
      console.log(process.env)
      const res = await fetch(server + 'getThreads')
      const jsoned = await res.json()
      setThreads(jsoned)
    }

    foo()
  }, [])

  return (
    <div className='container'>
      <h1 className='font-weight-bold my-3'>Home page</h1>
      {threads.map((thread) => <ThreadCard key={thread._id} thread={thread} />)}
    </div>
  )
}

export default Home
