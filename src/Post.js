import { useHistory, Link } from 'react-router-dom'

const Post = ({ props }) => {
  const id = props._id
  const title = props.title
  const content = props.content
  const history = useHistory()

  return (
    <Link to={`/thread/${id}`}>
      <div className='border border-primary rounded my-2 p-2'>
        <h4>{title}</h4>
        <p>{content}</p>
      </div >
    </Link>
  );
}

export default Post
