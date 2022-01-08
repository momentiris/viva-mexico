export const Article = ({ content }) => {
  return (
    <article>
      <h1 className="heading-1">{content.heading}</h1>
      {content.body.map((x) => (
        <p key={x.key}>{x}</p>
      ))}
    </article>
  );
};
