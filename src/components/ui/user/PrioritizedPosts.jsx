import Post from "../../post/Post";

function PrioritizedPosts(props) {
  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-4xl text-red-700 font-bold">Our featured vehicles</h2>
      {props.posts && (
        <div className="grid gap-6 grid-cols-3" >
          {props.posts.map((post) => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      )}
    </section>
  );
}

export default PrioritizedPosts;
