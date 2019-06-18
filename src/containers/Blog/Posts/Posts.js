/*import React,{Component} from 'react';
import axios from 'axios';
// import './Posts.css';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


class Posts extends Component{

    state={
        posts:[],
        // selectedPostId:null,
        // error: null
    }
    // postSelectedHandler = (id)=>{
    //     this.setState({selectedPostId:id})
    // }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts=response.data.slice(0,4);
            const updatedPosts= posts.map(post =>{
                return {
                    ...post,
                    author:'Maxxy'
                }
            }) 
            this.setState({posts:updatedPosts})
            // console.log(response)
                
        }).catch(error =>{
            console.log(error);
            // this.setState({error :true})
        })
    }
    
    // navigating programatically mostly after we finish some thing
    // or when we want to navigate to and forth
    postSelectedHandler=(id)=>{
        // this.props.history.push{pathname: '/'+ id);
        this.props.history.push('/posts/'+ id);
    }
    

    render(){

        let posts= <p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts= this.state.posts.map(post=>{
                //  <Link to ={'/posts/'+ post.id} key={post.id}>

                return<Post 
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}
                />
                // </Link>
            })
        }

        return(
            <div>
                <section className="Posts">
            {posts}
            </section>
            <Route path={this.props.match.url + '/:id '} exact component={FullPost}/>
            </div>
        ) 
    }
}
export default Posts;
*/
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 4 );
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelectedHandler = ( id ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push( '/posts/' + id );
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                    // </Link>
                );
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;



