import React, { Component } from 'react';

import './Blog.css';
// import axios from 'axios';
import Posts from './Posts/Posts';
import {Route,Link} from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/new_post">New Post</Link></li>
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
                {/* <Route path="/new_posts" exact render={()=><h1>Posts</h1>}/> */}
            </div>
        );
    }
}

export default Blog;
