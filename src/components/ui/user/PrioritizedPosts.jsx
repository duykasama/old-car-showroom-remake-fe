function PrioritizedPosts(props) {
    return ( <section>
        <div>Prioritized posts</div>
        {props.posts.map(post => <div>Post</div>)}
    </section> );
}

export default PrioritizedPosts;