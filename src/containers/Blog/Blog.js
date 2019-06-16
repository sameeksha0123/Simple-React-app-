import React, { Component } from 'react';
import { Route , NavLink ,Switch,Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost'; 
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
  
    render () {
       
        return ( 
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' 
                            activeClassName='my-active'
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}
                            >Home</NavLink></li>
                            <li><NavLink exact to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'}}>
                                New-post</NavLink>
                                </li>
                        </ul>
                    </nav>
                </header>
                
        {/* to consider only one switch at a time */}
                <Switch>
                <Route path='/new-post'  component={NewPost} />
                <Route path='/posts'  component={Posts} />
                <Redirect from='/' to='/posts'/> 
                </Switch>
                
                {/* <section>
                    <FullPost  id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;