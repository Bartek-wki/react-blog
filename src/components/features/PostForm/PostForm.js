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
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';


const PostForm = ({ action, actionText, initialTitle, initialAuthor, initialPublishedDate, initialShortDescription, initialContent, initialCategory}) => {
  
  if (initialTitle === undefined) {initialTitle = ''}
  if (initialAuthor === undefined) {initialAuthor = ''}
  if (initialPublishedDate === undefined) {initialPublishedDate = ''}
  if (initialShortDescription === undefined) {initialShortDescription = ''}
  if (initialShortDescription === undefined) {initialShortDescription = ''}
  if (initialContent === undefined) { initialContent = '' }
  if (initialCategory === undefined) {initialCategory = ''}
  
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const categories = useSelector(state => getAllCategories(state));
  
  const [title, setTitle] = useState(initialTitle)
  const [author, setAuthor] = useState(initialAuthor)
  const [shortDescription, setShortDescription] = useState(initialShortDescription)
  const [publishedDate, setPublishedDate] = useState(initialPublishedDate)
  const [content, setContent] = useState(initialContent)
  const [contentError, setContentError] = useState(false)
  const [dateError, setDateError] = useState(false)
  const [category, setCategory] = useState(initialCategory)

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, category, shortDescription, content })
    }
  }
 
  return (
    <Form className="col-10" onSubmit={validate(handleSubmit)}>
      <Row className="d-flex flex-column">
        <FormGroupText
          useFormRegister={{ ...register("title", { required: true, minLength:3 }) }}
          useFormError={errors}
          ErrorText={"This field requires at least 3 characters "}
          label={"Title"}
          placeholder={"Enter title"}
          value={title} setValue={setTitle} />
        <FormGroupText
          useFormRegister={{ ...register("author", { required: true, minLength:3 }) }}
          useFormError={errors}
          ErrorText={"This field requires at least 3 characters "}
          label={"Author"}
          placeholder={"Enter author"}
          value={author} setValue={setAuthor} />
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
          {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        </Form.Group>
        <Form.Group className="mb-3 col-3">
          <Form.Label>Categories</Form.Label>
          <Form.Select aria-label="Default select example" value={category} onChange={e => setCategory(e.target.value)}>
            <option>Select categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <FormGroupTextarea
          useFormRegister={{ ...register("shortDescription", { required: true, minLength:20 }) }}
          useFormError={errors}
          ErrorText={"This field requires at least 20 characters "}
          label={"Short description"} height={"100px"}
          value={shortDescription} setValue={setShortDescription} />
        <ReactQuill theme="snow" value={content || ''} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Row>
      <Button variant="primary" type="submit" className="my-4">
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
  initialPublishedDate: PropTypes.object,
  initialShortDescription: PropTypes.string,
  initialContent: PropTypes.string,
}

export default PostForm;