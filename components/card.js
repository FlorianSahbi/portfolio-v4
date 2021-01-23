function Card({ src }) {
  return (
    <div className="h-full w-full border-2 p-1 border-blue-900 rounded-xl">
      <img className="w-full h-full object-cover rounded-xl shadow-xl" src={src}></img>
    </div>
  )
}

export default Card;
