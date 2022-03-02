import EditPostForm from "../../features/EditPostForm/EditPostForm";
import { useParams } from 'react-router';


const EditPost = () => {
  const { id } = useParams();

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <h1 className="col-12">Edit post</h1>
      <EditPostForm id={id} />
    </div>
  )
}

export default EditPost;