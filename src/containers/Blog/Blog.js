import React, { Component } from 'react';
import axios from "../../axios"
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        hasError : false,
    }
    componentDidMount() {
        axios.get("/posts",{
            params: {
              _limit: 10
             }
          }).then(response => {
            this.setState({posts: response.data})
           
        }).catch(error => {
            this.setState({
                hasError:true
            })
        })
    }
    postClickHandler(id){
        this.setState({selectedPostId: id})

        
    }


    render () {
        
        let posts = <p style={{textAlign: 'center',color: 'red'}}>Something went wrong</p>
        if(!this.state.hasError){
             posts = this.state.posts.map(post => {
                return <Post key= {post.id} title={post.title}
                 postClick = { () => {this.postClickHandler(post.id)}}
                />
            }) 
        }


        return (
            <div>
                <section className="Posts">
                {posts} 
                </section>
                <section>
                    <FullPost  postId = {this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;