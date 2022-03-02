import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";


const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedDate, setPublishedDate] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate, shortDescription, content}));
    setTitle('')
    navigate("/", { replace: true });
  }

  return (
    <Form className="col-10" onSubmit={handleSubmit}>
      <Row className="d-flex flex-column">
        <Form.Group className="mb-3 col-3">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 col-3">
          <Form.Label>Author</Form.Label>
          <Form.Control placeholder="Enter author" type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 col-3">
          <Form.Label>Published</Form.Label>
          <Form.Control placeholder="Enter published" type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 col-10">
          <Form.Label>Short description</Form.Label>
          <Form.Control placeholder="Leave a comment here" style={{ height: '100px' }} type="text" as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 col-10">
          <Form.Label>Main content</Form.Label>
          <Form.Control placeholder="Leave a comment here" style={{ height: '200px' }} type="text" as="textarea" value={content} onChange={e => setContent(e.target.value)} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  )
}

export default AddPostForm;