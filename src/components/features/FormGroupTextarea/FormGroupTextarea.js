import Form from 'react-bootstrap/Form'


const FormGroupTextarea = ({label, height, value, setValue}) => {

  return (
    <Form.Group className="mb-3 col-10">
      <Form.Label>{label}</Form.Label>
      <Form.Control placeholder="Leave a comment here" style={{ height: `${height}` }} type="text" as="textarea" value={value} onChange={e => setValue(e.target.value)} />
    </Form.Group>
  )
};

export default FormGroupTextarea;