const fecthComments = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json()) 
}

export default async function Post ({ params }) {
    const { id } = params
    const comments = await fecthComments(id)
   
    return (
        <ul style={{ background: "#444", fontSize: "10px"}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <img width="50" height="50" src={`https://api.dicebear.com/8.x/pixel-art-neutral/svg?seed=${comment.email}`} 
                    alt={comment.name} />
                    <h4>{comment.name}</h4>
                    <small>{comment.name}</small>
                </li>
            ))}
        </ul>
    )
}