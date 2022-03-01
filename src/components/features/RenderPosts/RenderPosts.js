import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../../redux/postsRedux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



const RenderPosts = () => {
  const posts = useSelector(state => getAllPosts(state));
  console.log(posts);

  return (
    <div className="d-flex justify-content-start flex-wrap row">
      {posts.map(post => (
        <Card key={post.id} className="m-3 col-12 col-lg-5 col-xl-3">
          <Card.Body>
            <Card.Title>{ post.title }</Card.Title>
            <Card.Text>
              <p><strong>Author: </strong>{post.author}</p>
              <p><strong>Published: </strong>{post.publishedDate}</p>
              <p>{post.shortDescription}</p>
            </Card.Text>
            <Button as={Link} to={"/post/" + post.id}>Read more</Button> 
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RenderPosts;