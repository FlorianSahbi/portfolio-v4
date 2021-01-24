import Head from 'next/head'
import Skill from "../components/skill";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Description from '../components/description';
import Toggle from '../components/themeToggle';
import { ThemeProvider } from "../components/themeContext";

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
    <ThemeProvider>
      <Toggle />
      <Head>
        <title>Florian Sahbi - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My new new new portfolio used to test a new js stack." />
      </Head>
      <Header src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/46507202_2200879606591041_3141919549419421696_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=r4-s85ZFtrgAX_XkQmK&_nc_ht=scontent-cdg2-1.xx&oh=ca9a7f4e4a02228ed3e414730cf208a3&oe=6031B6A5" />
      <Description />
      <div className="-mt-44 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800">
        <div className="mx-4 divide-y md:divide-x divide-gray-300 dark:divide-gray-800 grid grid-cols-1 md:grid-cols-3 border-2 border-gray-300 dark:border-gray-900 dark:bg-gray-900 bg-white shadow-xl rounded-xl text-center">
          <Skill
            icon="https://cdnlogo.com/logos/h/26/haml.svg"
            title="Back-end"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            subtitle1="Title:"
            languages="Javascript, Node, ExpressJS"
            subtitle2="Tools:"
            tools={tools3}
          />
          <Skill
            icon="https://cdnlogo.com/logos/h/26/haml.svg"
            title="Front-end"
            description="I like to code things from scratch, and enjoy bringing ideas to life."
            subtitle1="Languages I speak:"
            languages="HTML, Jade, CSS, Javascript"
            subtitle2="Dev Tools:"
            tools={tools2}
          />
          <Skill
            icon="https://cdnlogo.com/logos/h/26/haml.svg"
            title="Misc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            subtitle1="Title :"
            languages="Javascript, Node, ExpressJS"
            subtitle2="Tools:"
            tools={tools3}
          />
        </div>
      </div>
      <div className="text-center py-16 dark:bg-gray-800 dark:text-yellow-100">
        <h2 className="font-bold text-3xl mb-4">
          My Recent Work
        </h2>
        <p className="font-extralight text-lg dark:text-yellow-50">
          Here are a few projects I've worked on recently. Want to see more? Email me.
        </p>
      </div>

      <div className="dark:bg-gray-800 grid grid-cols-1 gap-4 pb-4 px-4 sm:grid-cols-3">
        <Card src="https://animeland.fr/wp-content/uploads/2020/02/kiki-jiji.jpg" />
        <Card src="https://www.leparisien.fr/resizer/Ekey4nVHfB657a0M9RiiTSIPYyw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WXK2TZGDJ7NAZXFKB2LCK6SW64.jpg" />
        <Card src="https://images.wave.fr/images//your-name-netflix.jpg" />
        <Card src="https://irp-cdn.multiscreensite.com/a0dcaa53/dms3rep/multi/mon-voisin-totoro.jpg" />
        <Card src="https://cdna.artstation.com/p/assets/images/images/018/193/678/large/edward-chee-howl.jpg?1558577574&dl=1" />
        <Card src="https://i.ytimg.com/vi/FJmNKdGrsR0/maxresdefault.jpg" />
      </div>
      <Footer src="https://d6ce0no7ktiq.cloudfront.net/images/preview/2018/10/26/design-30574/template-sticker-600x600.png" />
    </ThemeProvider>
  )
}
