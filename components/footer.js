import RoundButton from "./roundButton";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-blue-800 to-blue-900 text-center py-16 space-y-8">
      <img className="mx-auto h-24" src="https://d6ce0no7ktiq.cloudfront.net/images/preview/2018/10/26/design-30574/template-sticker-600x600.png" />
      <p className="font-extralight text-xl text-blue-600">
        Living, learning, & leveling up one day at a time.
      </p>
      <div className="mx-auto grid grid-cols-3 w-max items-center">
        <RoundButton />
        <RoundButton />
        <RoundButton />
      </div>
      <p className="font-extralight text-xs text-white">
        Made with love by me.
      </p>
    </footer>
  )
}

export default Footer;
