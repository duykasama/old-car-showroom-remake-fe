import Post from "../../post/Post";

function PrioritizedPosts(props) {
  return (
    <>
      {props.posts && (
        <section className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl text-red-700 font-semibold">
            Our featured vehicles
          </h2>
          {props.posts && (
            <div className="grid gap-6 grid-cols-3">
              {props.posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default PrioritizedPosts;
