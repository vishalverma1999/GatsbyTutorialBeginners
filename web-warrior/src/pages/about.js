import React from 'react'

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quod corrupti tempora, officiis velit ullam fugit repellendus suscipit, voluptatum ipsum accusantium? Sed, dolore sequi voluptas laboriosam optio, illo tempore accusantium, et eum quia voluptates magni dolores corporis placeat officia. Adipisci excepturi earum inventore voluptates corporis mollitia eos cumque aperiam libero.</p>
        </div>
    )
}


/*
gatsby mein route nahi banana padta lag se bas jo tune file name diya hai use hi /karke enter karde chrome par. Eg: http://localhost:8000/about
But this http://localhost:8000/index will not work because index file is a base route and it can be accessed by just only http://localhost:8000/
 */