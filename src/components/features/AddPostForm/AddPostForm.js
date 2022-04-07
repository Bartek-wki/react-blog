import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';


const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (props) => {
    dispatch(addPost(props));
    navigate("/", { replace: true });
  }

  return (
    <PostForm action={handleSubmit} actionText={'Add post'} />
  )
}

export default AddPostForm;