function Card({ src }) {
  return (
    <div
      className="h-full w-full border-2 p-1 dark:border-yellow-100 border-blue-900 rounded-xl"
    >
      <img
        loading="lazy"
        className="w-full h-full object-cover rounded-xl shadow-xl"
        alt={`card-${src}`}
        src={src} />
    </div>
  )
}

export default Card;
