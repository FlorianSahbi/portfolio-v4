import { ReactElement } from "react";

interface RoundButtonInterface {
  icon: ReactElement;
  href: string;
}

function RoundButton({ icon, href }: RoundButtonInterface) {
  return (
    <div
      className="
        group 
        flex 
        justify-center 
        items-center
        transition
        mx-2
        h-10
        w-10
        p-2
        rounded-full 
        border-2
        dark:border-yellow-100
        border-blue-500 
        dark:hover:bg-yellow-50
        dark:hover:border-yellow-50
        hover:border-blue-300
        dark:hover:text-gray-900
        hover:bg-blue-300 
        cursor-pointer
        "
    >
      <a
        href={href}
        target="_blank"
        rel="noopener"
      >
        {/* <p
          className="
            text-gray-50 
            dark:text-yellow-50 
            dark:group-hover:text-gray-900 
            group-hover:text-gray-900
          "
        > */}
        {icon}
        {/* </p> */}
      </a>
    </div>
  )
}

export default RoundButton;