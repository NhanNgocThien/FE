import './App.css';
import {
  BrowserRouter,
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar';  
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Counter} />
            <Route exact path='/post/' component={Post}></Route>
            <Route exact path='/post/:postId' component={SinglePost}></Route>
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
