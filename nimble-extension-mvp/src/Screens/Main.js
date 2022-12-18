const Main = ({ snippet }) => {
  if (!snippet)
    return (
      <div className="swoop-center">
        {" "}
        <div className="explainer-wrapper box">&nbsp;</div>
      </div>
    );
  console.log("Snippet is", snippet);
  console.log("Snippet Text is", snippet.text);
  return (
    <div className="swoop-center">
      <div className="explainer-wrapper box">
        <div className="content">
          <blockquote>{snippet.text}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Main;
