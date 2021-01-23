function Header() {
  return (
    <header className="h-screen w-screen bg-gray-50 p-8">
      <div className="flex flex-col h-full w-full text-center justify-center border-8 border-blue-900 p-4">
        <h1 className="text-2xl sm:text-5xl font-bold">
          Esthetic, Front-end, Back-end Developer
        </h1>
        <p className="mt-5 text-xl font-extralight text-blue-900">
          I code beautifully simple things, and I love what I do.
        </p>
        <img className="mt-10 border-2 p-1 border-blue-900 block rounded-full w-36 h-w-36 object-cover mx-auto" src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46507202_2200879606591041_3141919549419421696_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=r4-s85ZFtrgAX_XkQmK&_nc_ht=scontent-cdg2-1.xx&oh=ca9a7f4e4a02228ed3e414730cf208a3&oe=6031B6A5" />
      </div>
    </header>
  )
}

export default Header;
