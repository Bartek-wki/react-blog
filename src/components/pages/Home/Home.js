import RenderPosts from "../../features/RenderPosts/RenderPosts";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All posts</h1>
        <Button variant="outline-primary" style={{ height: '40px' }} as={Link} to={"/post/add"}>Add post</Button>
      </div>
      <RenderPosts />
    </>
  )
}

export default Home;