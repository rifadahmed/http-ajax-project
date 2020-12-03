import React , {Component} from "react"
import Post from "../../components/Post/Post" 
import axios from "../../axios"
import {Link} from "react-router-dom"
class Posts extends Component {
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
    render(){
        let posts = <p style={{textAlign: 'center',color: 'red'}}>Something went wrong</p>
        if(!this.state.hasError){
             posts = this.state.posts.map(post => {
                return(
                    <Link to= {"/post/" + post.id} key= {post.id}>
                    <Post title={post.title}
                     postClick = { () => {this.postClickHandler(post.id)}}
                    />
                    </Link>
                ) 

            }) 
        }

        return(
            <section className="Posts">
            {posts} 
            </section>
        )
    }
}
export default Posts