import './App.css';
import PostCreate from './components/postCreate';
import PostList from './components/postList';

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Post list</h1>
      <PostList />
    </div>
  );
}

export default App;
