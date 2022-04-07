import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';


const RenderCategoriesList = () => {
  const categories = useSelector(state => getAllCategories(state));

  return (
    <ListGroup className="col-8">
      {categories.map(category => (
        <ListGroup.Item key={category.id} as={Link} to={"/category/" + category.name}>{ category.name }</ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default RenderCategoriesList