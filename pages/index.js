import Head from 'next/head'
import Skill from "../components/skill";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Description from '../components/description';

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
      <Header />
      <Description />
      <div className="-mt-44 mx-4 divide-y md:divide-x divide-gray-300 grid grid-cols-1 md:grid-cols-3 border-2 border-gray-300 bg-white shadow-xl rounded-xl text-center">
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

      <div className="">
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
