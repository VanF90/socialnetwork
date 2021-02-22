import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
  return (

    <div className={s.item}>
      <img src='https://zendeskgarden.github.io/css-components/avatars/images/ma.png'></img>
         { props.message }
      <div>
        <span>like</span>
        { props.likesCount }
      </div>

    </div>


  )

}

export default Post;