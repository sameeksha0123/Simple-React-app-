import React, { Component } from 'react';
import { Route , NavLink ,Switch,Redirect} from 'react-router-dom';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost'; 
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost =asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth: true
    }
    render () {
       
        return ( 
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' 
                            exact
                            activeClassName='my-active'
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}
                            >Posts</NavLink></li>
                            <li><NavLink  to={{
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
                <Route path='/new-post'  component={AsyncNewPost} />
                <Route path='/posts'  component={Posts} />
                <Route render={() => <h1>Not found</h1>}/>
                {/* <Redirect from='/' to='/posts'/>  */}
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