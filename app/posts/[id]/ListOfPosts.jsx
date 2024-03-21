const fecthPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
}

export async function ListOfPosts () {
    const posts = await fecthPosts()
    
    const handleClick = () => {
        alert("ME GUSTA ESTE POST")
    }

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <h2 style={{ color: "#09f"}}>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleClick}>Me gusta</button>
        </article>
    ))
}