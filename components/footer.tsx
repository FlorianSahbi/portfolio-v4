import RoundButton from "./roundButton";
import { TiSocialPinterest, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

interface FooterInterface {
  src: string;
}

function Footer({ src }: FooterInterface) {
  return (
    <footer
      className="
        py-8 
        space-y-4
        text-center
        bg-gradient-to-b 
        from-blue-800
        to-blue-900
        dark:from-gray-800
        dark:to-gray-900
        "
    >
      <img
        loading="lazy"
        alt={`round-button-${src}`}
        src={src}
        className="
          mx-auto
          h-32
          "
      />
      <div
        className="
          grid 
          grid-cols-3 
          mx-auto 
          w-max 
          text-2xl
          "
      >
        <RoundButton
          icon={<TiSocialPinterest />}
          href="https://www.pinterest.fr/FlorianSahbi/"
        />
        <RoundButton
          icon={<TiSocialLinkedin />}
          href="https://www.linkedin.com/in/floriansahbi/"
        />
        <RoundButton
          icon={<TiSocialGithub />}
          href="https://github.com/FlorianSahbi/"
        />
      </div>
      <p
        className="
          font-extralight
          text-xs
          text-blue-500
          dark:text-gray-500
          "
      >
        Made with love by me
      </p>
    </footer>
  )
}

export default Footer;
