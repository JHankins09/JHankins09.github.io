import ChickenPix from './../Photos/ChickenPix.png'
import Groups from './../Photos/Groups.png'
import TicTacToe from './../Photos/Tic-Tac-Toe.png'
import Trips from './../Photos/Trips.png'
import DadJokes from './../Photos/DadJokeApp.png'
import WebChat from './../Photos/WebChat.png'
import Portfolio from './../Photos/Portfolio.png'

const ProjectData ={
  portfolio: {
    number: 1,
    total: 7,
    name: 'JamesHankins.Dev',
    type: 'Full-Stack',
    tech: ['JavaScript', 'React.js', 'Node.js', 'MailJet'],
    image: Portfolio,
    imageDesc: 'Preview of JamesHankins.dev',
    demo: false,
    creds: {
      username: 'guest@email.com',
      password: 'welcome'
    },
    description: `This is my portfolio! Built with React and React Hooks, as
                 well as a minor backend to intigrate MailJet for emai forwarding.
                 This site is constantly under continuous development.`,
    gitHub: 'https://github.com/JamesHankinsDev/portfolio',
    demoUrl: 'Demo Url'
  },
  webchat: {
    number: 2,
    total: 7,
    name: 'WebChat',
    type: 'Full-Stack',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Socket.io'],
    image: WebChat,
    imageDesc: 'Preview of WebChat',
    demo: false,
    creds: {
      username: 'Welcome@guest.com',
      password: 'guest'
    },
    description: `WebChat built as part of a tutorial from 'JavaScript Mastery'.
                  Not currently deployed.`,
    gitHub: 'https://github.com/JamesHankinsDev/ChatApp-Client',
    demoUrl: 'Demo Url'
  },
  dadjokes: {
    number: 3,
    total: 7,
    name: 'Dad-Joke-0-Matic!',
    type: 'Front-End',
    tech: ['JavaScript', 'CSS3', 'HTML5'],
    image: DadJokes,
    imageDesc: 'Preview of Dad-Joke-0-Matic!',
    demo: true,
    creds: false,
    description: `Custom client for Dad-Jokes API. Focus primarily dedicated to
                  mobile experience and CSS animations.`,
    gitHub: 'https://github.com/JamesHankinsDev/Dad-Joke-Client',
    demoUrl: 'https://jameshankinsdev.github.io/Dad-Joke-Client'
  },
  trips: {
    number: 4,
    total: 7,
    name: 'T.R.I.P.S.',
    type: 'Full-Stack',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Express.JS', 'MongoDB', 'AXOIS'],
    image: Trips,
    imageDesc: 'Preview of T.R.I.P.S.',
    demo: true,
    creds: {
      username: 'Welcome@guest.com',
      password: 'guest'
    },
    description: `App for simple construction of travel itineraries, as well as to
                  take notes of highlights of various destinations on a trip.`,
    gitHub: 'https://github.com/JamesHankinsDev/trips-client',
    demoUrl: 'https://JamesHankinsDev.github.io/trips-client/#/'
  },
  chickenpix: {
    number: 5,
    total: 7,
    name: 'Chicken Pix',
    type: 'Full-Stack',
    tech: ['JavaScript', 'Node.js', 'Express.JS', 'MongoDB', 'AWS'],
    image: ChickenPix,
    imageDesc: 'Preview of Chicken Pix',
    demo: true,
    creds: {
      username: 'Welcome@guest.com',
      password: 'guest'
    },
    description: `Developed in collaboration as a 4 person team. Objective was to
                  leverage AWS to build an image hosting client that can display
                  basic details about the image. I assumed role as front-end lead.`,
    gitHub: 'https://github.com/the-coherant-chickens/the-coherent-chickens-client',
    demoUrl: 'https://the-coherant-chickens.github.io/the-coherent-chickens-client/'
  },
  groups: {
    number: 6,
    total: 7,
    name: 'Groups',
    type: 'Full-Stack',
    tech: ['JavaScript', 'HandleBars.JS', 'Ruby', 'Rails', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'BootStrap'],
    image: Groups,
    imageDesc: 'Preview of Groups',
    demo: true,
    creds: {
      username: 'Welcome@guest.com',
      password: 'guest'
    },
    description: `Built to develop and keep track of various rosters of individuals.
                  Leverages open-read resources from Ruby on Rails.`,
    gitHub: 'https://github.com/JamesHankinsDev/Groups-Client',
    demoUrl: 'https://JamesHankinsDev.github.io/Groups-Client/'
  },
  tictactoe: {
    number: 7,
    total: 7,
    name: 'Tic-Tac-Toe',
    type: 'Front-End',
    tech: ['JavaScript', 'CSS3', 'HTML5', 'AJAX', 'JSON'],
    image: TicTacToe,
    imageDesc: 'Preview of Tic-Tac-Toe',
    demo: true,
    creds: {
      username: 'Welcome@guest.com',
      password: 'guest'
    },
    description: `Custom Client and game engine built onto third party API.
                  Leverages vanilla javascript making AJAX JSON calls.`,
    gitHub: 'https://github.com/JamesHankinsDev/Tic-Tac-Toe-Game',
    demoUrl: 'https://JamesHankinsDev.github.io/Tic-Tac-Toe-Game/'
  }
}

export default ProjectData
