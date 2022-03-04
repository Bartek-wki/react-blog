import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { getPostById } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';


const RenderSinglePost = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/" />
  return (
    <div className="m-3 col-12 col-lg-5 col-xl-3">
      <h2>{postData.title}</h2>
      <p><strong>Author: </strong>{postData.author}</p>
      <p><strong>Published: </strong>{dateToStr(postData.publishedDate)}</p>
      <p dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  )
}

export default RenderSinglePost;