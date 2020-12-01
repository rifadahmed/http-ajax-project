import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.postClick}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;