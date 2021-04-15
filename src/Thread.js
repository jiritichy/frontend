import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// TODO on making thread, if no username, then anonymous
// TODO logged in username displayed
// TODO make new threads
// TODO make new posts on thread
// TODO if your own post / thread, you can delete
const Thread = ({ match }) => {
  const [posts, setPosts] = useState([])
  const [thread, setThread] = useState('')
  const server = 'http://localhost:3001'
  const { id } = useParams()

  // load all the posts for given thread
  useEffect(() => {
    const foo = async () => {
      const res = await fetch(server + '/api/getThread/' + id)
      const jsoned = await res.json()
      setThread(jsoned)
      console.log(jsoned)
      // setPosts(jsoned)
    }

    foo()
  }, [])


  return (
    <div className='container'>
      <h1>{thread.title}</h1>
      <h6>- {thread.username}</h6>
      <h5>{thread.content}</h5>
    </div>
  )
}

export default Thread
