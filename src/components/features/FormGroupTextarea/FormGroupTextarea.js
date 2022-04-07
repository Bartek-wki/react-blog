import Form from 'react-bootstrap/Form'


const FormGroupTextarea = ({useFormRegister, useFormError, ErrorText, label, height, value, setValue }) => {
  
  const errorName = useFormRegister.name

  return (
    <Form.Group className="mb-3 col-10">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...useFormRegister}
        placeholder="Leave a comment here"
        style={{ height: `${height}` }}
        type="text" as="textarea"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {useFormError[errorName] && <small className="d-block form-text text-danger mt-2">{ErrorText}</small>}
    </Form.Group>
  )
};

export default FormGroupTextarea;