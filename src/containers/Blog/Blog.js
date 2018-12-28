import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
// import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost=asyncComponent(()=>{
  return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {
  state={
    posts:[],
    selectedPostId:null,
    auth:true
  }
  
 
    render () {
      
        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to="/posts/" exact
                    // u can change active class name
                    activeClassName="active">
                    Posts
                    </NavLink>
                    </li>
                    <li><NavLink to="/new_post">New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
                <Switch>
                {this.state.auth ? <Route path='/new_post' component={AsyncNewPost}/> :null}
                   
                    <Route path='/posts' component={Posts}/>
                    <Route render={()=><h1>404</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
             
                {/* <Route path="/new_posts" exact render={()=><h1>Posts</h1>}/> */}
            </div>
        );
    }
}

export default Blog;
