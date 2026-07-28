import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
const Feed = () => {

    const [posts, setPosts] = useState([{
        _id:"1",
        image:"https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Beautiful scenery",
    }
])

useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
        setPosts(res.data.posts)
    })
}, [])

  return (
    <section className='feed-section'>
        <h1>Feed</h1>
        {
            posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )
}
    </section>
  )
}

export default Feed