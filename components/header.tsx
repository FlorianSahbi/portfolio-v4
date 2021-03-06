import { VscArrowDown } from 'react-icons/vsc';
import Image from 'next/image'

interface HeaderInterface {
  title: string;
  subtitle: string;
  src: string;
}

function Header({ title, subtitle, src }: HeaderInterface) {
  return (
    <header
      className="
        relative 
        h-screen
        w-screen 
        bg-gradient-to-b 
        from-gray-50
        to-gray-100 
        p-4 
        dark:from-gray-900
        dark:to-gray-800
        "
    >
      <div
        className="
          flex
          flex-col
          h-full
          w-full
          text-center
          justify-center 
          border-8 
          border-blue-900
          dark:border-yellow-100
          "
      >
        <p
          className="
            text-2xl 
            sm:text-5xl
            font-bold
            dark:text-yellow-50
            "
        >
          {title}
        </p>
        <p
          className="
            mt-5
            text-xl 
            font-extralight
            text-blue-900
            dark:text-yellow-100
            "
        >
          {subtitle}
        </p>
        <div
          className="
            mt-10 
            border-2 
            p-1 
            border-blue-900 
            dark:border-yellow-100
            block 
            rounded-full
            w-36 
            h-36
            object-cover 
            mx-auto
            relative
            overflow-hidden
            "
          >
          <Image
            layout="fill"
            loading="lazy"
            alt={`header-${src}`}
            src={src}
          />
        </div>

      </div>
      <VscArrowDown
        className="
          absolute
          left-0 
          right-0 
          bottom-10 
          text-3xl 
          animate-bounce 
          text-yellow-50
          mx-auto
          "
      />
    </header>
  )
}

export default Header;
