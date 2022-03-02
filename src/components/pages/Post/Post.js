import RenderSinglePost from "../../features/RenderSinglePost/RenderSinglePost";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useState } from "react";
import DeleteModal from "../../features/Modal/DeleteModal";


const Post = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="d-flex justify-content-evenly">
      <RenderSinglePost />
      <div>
        <Button variant="outline-primary" className="mx-1" style={{ height: '40px' }} as={Link} to={"/post/edit/" + id}>Edit</Button>
          <Button variant="outline-danger" onClick={() => setModalShow(true)}>
            Delete
          </Button>

          <DeleteModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={id}
          />
      </div>
    </div>

  )
}

export default Post;