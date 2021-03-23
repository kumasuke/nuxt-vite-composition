
import { Config } from 'windicss/types/interfaces'
import typography from 'windicss/plugin/typography'

const windiConfig:Config = {
  darkMode: false, // or 'media' or 'class'
  // @link: https://windicss.netlify.app/guide/plugins.html
  plugins: [
    typography(),
    // plugin(({ addComponents }) => {
    //   const container = {
    //   }
    //   addComponents(container)
    // }),
  ],
  theme: {
    screens: {
    },
    textColor: {
      primary: '#333',
    },
  },
}

export default windiConfig
