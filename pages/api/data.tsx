export interface ProjectInterface {
  src: string;
}

export interface SkillInterface {
  icon: string;
  title: string;
  description: string;
  subtitle1: string;
  languages: string;
  subtitle2: string;
  tools: string[],
}

export const projects: ProjectInterface[] = [
  { src: "https://animeland.fr/wp-content/uploads/2020/02/kiki-jiji.jpg" },
  { src: "https://www.leparisien.fr/resizer/Ekey4nVHfB657a0M9RiiTSIPYyw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WXK2TZGDJ7NAZXFKB2LCK6SW64.jpg" },
  { src: "https://images.wave.fr/images//your-name-netflix.jpg" },
  { src: "https://irp-cdn.multiscreensite.com/a0dcaa53/dms3rep/multi/mon-voisin-totoro.jpg" },
  { src: "https://cdna.artstation.com/p/assets/images/images/018/193/678/large/edward-chee-howl.jpg?1558577574&dl=1" },
  { src: "https://i.ytimg.com/vi/FJmNKdGrsR0/maxresdefault.jpg" },
]

export const skills: SkillInterface[] = [
  {
    icon: "https://cdnlogo.com/logos/h/26/haml.svg",
    title: "Back-end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle1: "Title:",
    languages: "Javascript, Node, ExpressJS",
    subtitle2: "Tools:",
    tools: [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing"
    ],
  },
  {
    icon: "https://cdnlogo.com/logos/h/26/haml.svg",
    title: "Front-end",
    description: "I like to code things from scratch, and enjoy bringing ideas to life.",
    subtitle1: "Languages I speak:",
    languages: "HTML, Jade, CSS, Javascript",
    subtitle2: "Dev Tools:",
    tools: [
      "VSCode",
      "Bitbucket",
      "Material UI",
      "Tailwind",
      "Codepen",
      "Github",
      "Gitlab",
      "Terminal"
    ],
  },
  {
    icon: "https://cdnlogo.com/logos/h/26/haml.svg",
    title: "Misc",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle1: "Title :",
    languages: "Javascript, Node, ExpressJS",
    subtitle2: "Tools:",
    tools: [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing"
    ],
  },
]
