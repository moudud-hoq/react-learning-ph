import "./Friends.css";
function Post({ post }) {
  const { title, body, id, userId } = post;

  return (
    <div className="box">
      <h5>Id:{id}</h5>
      <p>
        <small>
          <b>Title</b>:{title}{" "}
        </small>
      </p>
      <p>
        <small>
          <b>Description</b>:{body}
        </small>
      </p>
    </div>
  );
}

export default Post;
