import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
      <p>"some additional text"<p>
      <h5>"life it live"</h5>
    </article>
  );
}

export default HelpBox;
