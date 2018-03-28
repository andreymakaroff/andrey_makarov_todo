import './content.scss';

export const Content = ({ posts, currentUser }) => (
  <content className="content">
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

