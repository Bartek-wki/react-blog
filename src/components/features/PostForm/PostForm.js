import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroupText from '../FormGroupText/FormGroupText';
import FormGroupTextarea from '../FormGroupTextarea/FormGroupTextarea';



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
        <FormGroupText label={"Title"} placeholder={"Enter title"} value={title} setValue={setTitle} />
        <FormGroupText label={"Author"} placeholder={"Enter author"} value={author} setValue={setAuthor} />
        <FormGroupText label={"Published"} placeholder={"Enter published"} value={publishedDate} setValue={setPublishedDate} />
        <FormGroupTextarea label={"Short description"} height={"100px"} value={shortDescription} setValue={setShortDescription} />
        <FormGroupTextarea label={"Main content"} height={"200px"} value={content} setValue={setContent} />
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