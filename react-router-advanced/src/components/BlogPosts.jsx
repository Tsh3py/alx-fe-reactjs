import { Link, Outlet, useParams } from 'react-router-dom';
import Post from './Post';

const BlogPosts = () => {
  let { postId } = useParams();

  // Simple hardcoded list of posts
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first blog post.' },
    { id: '2', title: 'Second Post', content: 'This is the second blog post.' },
    { id: '3', title: 'Third Post', content: 'This is the third blog post.' },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      {postId ? (
        <Post posts={posts} />
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default BlogPosts;