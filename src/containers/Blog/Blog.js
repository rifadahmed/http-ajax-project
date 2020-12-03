import React, { Component } from 'react';
import {Route, NavLink,Switch} from "react-router-dom"
import Posts from '../../containers/Posts/posts';
import NewPost from "../NewPost/NewPost"
import FullPost from "../FullPost/FullPost"


import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="NavItem">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink exact to="/" activeClassName="my-active" >Home</NavLink> </li>
                            <li> <NavLink exact to="/add-post" activeClassName="my-active">Add Post</NavLink> </li>
                            
                        </ul>
                    </nav>
                </header>
                
    
                <Switch>
                     {/* <Route  exact path="/" component={Posts}/>  */}
                    <Route exact path="/" component={Posts}/>
                    <Route path="/add-post" component={NewPost}/>
                    <Route  path="/post/:id" component={FullPost}/>
                     <Route  render={()=><h1>Not found</h1>}/> 
                </Switch>
                

            </div>
        );
    }
}

export default Blog;