import Head from 'next/head'
import Skill from "../components/skill";
import Card from "../components/card";
import Footer from "../components/footer";

const tools1 = [
  "Balsamiq Mockups",
  "Figma",
  "Invision",
  "Marvel",
  "Pen & Paper",
  "Sketch",
  "Webflow",
  "Zeplin"
]
const tools2 = [
  "Atom",
  "Bitbucket",
  "Bootstrap",
  "Bulma",
  "Codekit",
  "Codepen",
  "Github",
  "Gitlab",
  "Terminal"
]
const tools3 = [
  "5 years experience",
  "26 short courses",
  "42 bootcamps",
  "125+ students",
  "1,400+ mentor sessions",
  "60+ group critiques",
  "12,000+ comments"
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Florian Sahbi - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-8 px-8 h-screen bg-gray-50 w-screen">
        <div className="my-6 mx-6 absolute inset-0 border-8 border-blue-900"></div>
        <div className="flex flex-col h-full w-full justify-center text-center">
          <h1 className="text-3xl font-extrabold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p className="text-xl font-extralight text-blue-900">Aenean bibendum mollis tortor, lacinia auctor magna elementum id. Pellentesque sit amet vulputate sem, et suscipit nulla</p>
        </div>
      </header>


      <div className="w-full bg-gradient-to-t from-blue-800 to-blue-900 text-center text-gray-50 p-24 space-y-5">
        <p className="font-bold text-3xl">
          Hi, I’m Florian. Nice to meet you.
        </p>
        <p className="font-extralight text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum mollis tortor, lacinia auctor magna elementum id. Pellentesque sit amet vulputate sem, et suscipit nulla. Pellentesque placerat placerat ipsum et finibus. Sed vitae tempus lacus. Nam rhoncus sem vitae arcu mollis, sed porta augue rutrum. Nulla quis aliquam magna, vitae facilisis nisl. Fusce sed tellus leo. Nulla id efficitur orci, ut ornare velit. Curabitur non elit mi. Vivamus imperdiet urna et est ullamcorper, sed fermentum diam posuere. Curabitur eget eros a enim cursus pharetra sit amet vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin diam tortor, vitae mattis ex facilisis eu.
        </p>
      </div>


      <div className="divide-x divide-gray-100 m-8 grid grid-cols-3 border-2 border-gray-100 shadow-xl rounded-xl max-w-6xl mx-auto text-center">
        <Skill
          icon="https://mattfarley.ca/img/icons/designer.svg"
          title="Designer"
          description="I value simple content structure, clean design patterns, and thoughtful interactions."
          subtitle1="Things I enjoy designing:"
          languages="UX, UI, Web, Mobile, Apps, Logos"
          subtitle2="Design Tools:"
          tools={tools1}
        />
        <Skill
          icon="https://mattfarley.ca/img/icons/frontend.svg"
          title="Front-end Developer"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          subtitle1="Languages I speak:"
          languages="HTML, Pug, Slim, CSS, Sass, Less"
          subtitle2="Dev Tools:"
          tools={tools2}
        />
        <Skill
          icon="https://mattfarley.ca/img/icons/mentor.svg"
          title="Mentor"
          description="I genuinely care about people, and love helping fellow designers work on their craft."
          subtitle1="Experiences I draw from:"
          languages="UX/UI, Product design, Freelancing"
          subtitle2="Mentor Stats:"
          tools={tools3}
        />
      </div>

      <div className="text-center space-y-5">
        <h2 className="font-bold text-3xl">
          My Recent Work
        </h2>
        <p className="font-extralight text-lg">
          Here are a few design projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>

      <div className="grid max-w-6xl mx-auto grid-cols-3 gap-16 py-16 sm:grid-cols-1 sm:px-32">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}
