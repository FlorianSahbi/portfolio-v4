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
  { src: "/a.jpg" },
  { src: "/b.jpg" },
  { src: "/c.jpg" },
  { src: "/d.jpg" },
  { src: "/e.jpg" },
  { src: "/f.jpg" },
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
