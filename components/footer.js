import RoundButton from "./roundButton";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-800 to-blue-900 text-center">
      <img className="mx-auto" src="https://mattfarley.ca/img/mf-logo-white.svg" />
      <p className="font-extralight text-xl text-white">
        Living, learning, & leveling up one day at a time.
      </p>
      <div className="mx-auto grid grid-cols-3 w-max items-center">
        <RoundButton />
        <RoundButton />
        <RoundButton />
      </div>
      <p className="font-extralight text-white">
        Made with ❤️ by me.
      </p>
    </footer>
  )
}

export default Footer;
