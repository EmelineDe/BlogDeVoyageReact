function BlogPost({ title, content }) {
  return (
    <div className="m-4 p-4 border rounded shadow-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
