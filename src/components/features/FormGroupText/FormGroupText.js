import Form from 'react-bootstrap/Form'


const FormGroupText = ({label, placeholder, value, setValue}) => {

  return (
    <Form.Group className="mb-3 col-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control placeholder={placeholder} type="text" value={value} onChange={e => setValue(e.target.value)} />
    </Form.Group>
  )
};

export default FormGroupText;