import { useDispatch } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';


const EditPostForm = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const postData = useSelector(state => getPostById(state, id));
 


  const handleSubmit = (props) => {
    dispatch(editPost({ ...props, id }));
    navigate("/", { replace: true });
  }

  return (
    <PostForm
      action={handleSubmit}
      actionText={'Edit post'}
      initialTitle={postData.title}
      initialAuthor={postData.author}
      initialPublishedDate={postData.publishedDate}
      initialShortDescription={postData.shortDescription}
      initialContent={postData.content}
      initialCategory={postData.category}
    />
  )
}

export default EditPostForm;