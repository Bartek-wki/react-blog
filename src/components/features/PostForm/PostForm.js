import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row } from 'react-bootstrap';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroupText from '../FormGroupText/FormGroupText';
import FormGroupTextarea from '../FormGroupTextarea/FormGroupTextarea';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { dateToStr } from '../../../utils/dateToStr';


const PostForm = ({ action, actionText, initialTitle, initialAuthor, initialPublishedDate, initialShortDescription, initialContent}) => {
  
  if (initialTitle === undefined) {initialTitle = ''}
  if (initialAuthor === undefined) {initialAuthor = ''}
  if (initialPublishedDate === undefined) {initialPublishedDate = ''}
  if (initialShortDescription === undefined) {initialShortDescription = ''}
  if (initialShortDescription === undefined) {initialShortDescription = ''}
  if (initialContent === undefined) {initialContent = ''}
  
  const [title, setTitle] = useState(initialTitle)
  const [author, setAuthor] = useState(initialAuthor)
  const [shortDescription, setShortDescription] = useState(initialShortDescription)
  const [publishedDate, setPublishedDate] = useState(initialPublishedDate)
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
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        <FormGroupTextarea label={"Short description"} height={"100px"} value={shortDescription} setValue={setShortDescription} />
        <ReactQuill theme="snow" value={content || ''} onChange={setContent} />
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