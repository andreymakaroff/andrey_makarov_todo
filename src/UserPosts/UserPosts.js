import './userPosts.scss';

export const UserPosts = ({ posts, currentUser }) => (
  <content className="userPosts">
    {
      posts.length > 0 ?
        <React.Fragment>
          <h4>Posts title of {currentUser}</h4>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </React.Fragment> : <div>Plz click on user</div>
    }
  </content>
);

