import Form from 'react-bootstrap/Form'


const FormGroupText = ({useFormRegister, useFormError, ErrorText, label, placeholder, value, setValue}) => {

  const errorName = useFormRegister.name
  
  return (
    <Form.Group className="mb-3 col-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...useFormRegister}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {useFormError[errorName] && <small className="d-block form-text text-danger mt-2">{ErrorText}</small>}
    </Form.Group>
  )
};

export default FormGroupText;