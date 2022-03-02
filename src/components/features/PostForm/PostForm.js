import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';



const PostForm = ({ action, actionText, initialTitle, initialAuthor, initialPublishedDate, initialShortDescription, initialContent}) => {
  
  if (initialTitle === undefined) {
    initialTitle = ''
  } else if (initialAuthor === undefined) {
    initialAuthor = ''
  } else if (initialPublishedDate === undefined) {
    initialPublishedDate = ''
  } else if (initialShortDescription === undefined) {
    initialShortDescription = ''
  } else if (initialShortDescription === undefined) {
    initialShortDescription = ''
  } else if (initialContent === undefined) {
    initialContent = ''
  }
  

  const [title, setTitle] = useState(initialTitle)
  const [author, setAuthor] = useState(initialAuthor)
  const [publishedDate, setPublishedDate] = useState(initialPublishedDate)
  const [shortDescription, setShortDescription] = useState(initialShortDescription)
  const [content, setContent] = useState(initialContent)



  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content})
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
        {actionText}
      </Button>
    </Form>
  )
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  initialTitle: PropTypes.string,
  initialAuthor: PropTypes.string,
  initialPublishedDate: PropTypes.string,
  initialShortDescription: PropTypes.string,
  initialContent: PropTypes.string,
}

export default PostForm;