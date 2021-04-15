import { useState, useEffect } from 'react'
import Post from './Post'

const Home = () => {
  const [posts, setPosts] = useState([])
  const server = 'http://localhost:3001'

  // TODO search for posts

  useEffect(() => {
    const foo = async () => {
      const res = await fetch(server + '/api/getThreads')
      const jsoned = await res.json()
      setPosts(jsoned)
    }

    foo()
  }, [])

  return (
    <div className='container'>
      <h1 className='font-weight-bold my-3'>Home page</h1>
      {posts.map((post) => <Post key={post._id} props={post} />)}
    </div>
  )
}

export default Home
