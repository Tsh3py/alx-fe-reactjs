import { useParams, Link } from 'react-router-dom';

const Post = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>Sorry, the post you are looking for does not exist.</p>
        <Link to="/posts">Back to all posts</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/posts">Back to all posts</Link>
    </div>
  );
};

export default Post;