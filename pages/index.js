import Head from 'next/head'
import Skill from "../components/skill";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Description from '../components/description';

const tools2 = [
  "VSCode",
  "Bitbucket",
  "Material UI",
  "Tailwind",
  "Codepen",
  "Github",
  "Gitlab",
  "Terminal"
]
const tools3 = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing"
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
          title="Back-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          subtitle1="Title:"
          languages="Javascript, Node, ExpressJS"
          subtitle2="Tools:"
          tools={tools3}
        />
        <Skill
          icon="https://mattfarley.ca/img/icons/frontend.svg"
          title="Front-end"
          description="I like to code things from scratch, and enjoy bringing ideas to life."
          subtitle1="Languages I speak:"
          languages="HTML, Jade, CSS, Javascript"
          subtitle2="Dev Tools:"
          tools={tools2}
        />
        <Skill
          icon="https://mattfarley.ca/img/icons/mentor.svg"
          title="Misc"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          subtitle1="Title :"
          languages="Javascript, Node, ExpressJS"
          subtitle2="Tools:"
          tools={tools3}
        />
      </div>

      <div className="text-center my-16">
        <h2 className="font-bold text-3xl mb-4">
          My Recent Work
        </h2>
        <p className="font-extralight text-lg">
          Here are a few design projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4 mx-4 sm:grid-cols-3">
        <Card src="https://animeland.fr/wp-content/uploads/2020/02/kiki-jiji.jpg" />
        <Card src="https://www.leparisien.fr/resizer/Ekey4nVHfB657a0M9RiiTSIPYyw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WXK2TZGDJ7NAZXFKB2LCK6SW64.jpg" />
        <Card src="https://images.wave.fr/images//your-name-netflix.jpg" />
        <Card src="https://irp-cdn.multiscreensite.com/a0dcaa53/dms3rep/multi/mon-voisin-totoro.jpg" />
        <Card src="https://cdna.artstation.com/p/assets/images/images/018/193/678/large/edward-chee-howl.jpg?1558577574&dl=1" />
        <Card src="https://i.ytimg.com/vi/FJmNKdGrsR0/maxresdefault.jpg" />
      </div>
      <Footer />
    </>
  )
}
