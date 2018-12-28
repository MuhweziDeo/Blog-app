import React, { Component } from 'react';

import './Blog.css';
// import axios from 'axios';
import Posts from './Posts/Posts';
import {Route,NavLink} from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  state={
    posts:[],
    selectedPostId:null
  }
  
 
    render () {
      
        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to="/" exact
                    // u can change active class name
                    activeClassName="active">
                    Home
                    </NavLink>
                    </li>
                    <li><NavLink to="/new_post">New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
            
                {/* <section>
                    <FullPost  id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Posts/> */}
                {/* <Route path="/" exact render={()=><Posts/>}/> */}
                <Route path='' exact component={Posts}/>
                <Route path='/new_post' exact component={NewPost}/>
                <Route path="/:id" component={FullPost}/>
                {/* <Route path="/new_posts" exact render={()=><h1>Posts</h1>}/> */}
            </div>
        );
    }
}

export default Blog;
