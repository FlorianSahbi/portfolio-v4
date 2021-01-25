import Head from 'next/head'
import Skills from "../components/skills";
import Footer from "../components/footer";
import Header from "../components/header";
import Description from '../components/description';
import Toggle from '../components/themeToggle';
import Projects from '../components/projects';
import { Theme } from "../components/themeContext";

export default function Home() {
  return (
    <Theme.Provider>
      <Head>
        <title>Florian Sahbi - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My new new new portfolio used to test a new js stack." />
      </Head>
      <Header
        title="Front-end Developer"
        subtitle="I love what I do."
        src="/pp.jpg"
      />
      <Toggle />
      <Description
        title="Hi, I’m Florian. Nice to meet you."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum mollis tortor, lacinia auctor magna elementum id. Pellentesque sit amet vulputate sem, et suscipit nulla. Pellentesque placerat placerat ipsum et finibus. Sed vitae tempus lacus. Nam rhoncus sem vitae arcu mollis, sed porta augue rutrum. Nulla quis aliquam magna, vitae facilisis nisl. Fusce sed tellus leo. Nulla id efficitur orci, ut ornare velit. Curabitur non elit mi. Vivamus imperdiet urna et est ullamcorper, sed fermentum diam posuere. Curabitur eget eros a enim cursus pharetra sit amet vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sollicitudin diam tortor, vitae mattis ex facilisis eu."
      />
      <Skills />
      <Projects />
      <Footer
        src="/footer.png"
      />
    </Theme.Provider>
  )
}
