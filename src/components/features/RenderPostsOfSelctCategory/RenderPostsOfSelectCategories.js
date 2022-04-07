import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { dateToStr } from '../../../utils/dateToStr';
import { Link } from 'react-router-dom';




const RenderPostsofSelectCategories = () => {
  const { category } = useParams();
  const postsData = useSelector(state => getPostsByCategory(state, category));

  return (
    <div className="d-flex justify-content-start flex-wrap row">
      {postsData.map(post => (
        <Card key={post.id} className="m-3 col-12 col-lg-5 col-xl-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <strong>Author: </strong>{post.author}
            </Card.Text>
            <Card.Text>
              <strong>Published: </strong>{dateToStr(post.publishedDate)}
            </Card.Text>
            <Card.Text>
              <strong>Category: </strong>{post.category}
            </Card.Text>
            <Card.Text>
              {post.shortDescription}
            </Card.Text>
            <Button as={Link} to={"/post/" + post.id}>Read more</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RenderPostsofSelectCategories;