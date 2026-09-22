/* Placeholder 3D paperback mockup — swap the cover face for real art later. */
export default function BookCover() {
  return (
    <div className="book-scene" aria-hidden="true">
      <div className="book">
        <div className="book__face book__pages" />
        <div className="book__face book__spine">
          <span className="book__spine-text">The Distance I Mistook For Love</span>
        </div>
        <div className="book__face book__front">
          <div className="book__cover">
            <span className="book__eyebrow">poetry</span>
            <span className="book__title">The Distance I Mistook For Love</span>
            <span className="book__rule" />
            <span className="book__author">Selam Gessese</span>
          </div>
        </div>
      </div>
    </div>
  );
}
