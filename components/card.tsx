import Image from 'next/image'

function Card({ src }) {
  return (
    <div
      className="relative h-full w-full border-2 p-1 flex dark:border-yellow-100 border-blue-900 rounded-xl"
    >
      <Image
        loading="lazy"
        className="w-full h-full object-cover rounded-xl shadow-xl"
        alt={`card-${src}`}
        src={src}
        layout="fill"
      />
    </div>
  )
}

export default Card;
