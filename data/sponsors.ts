type SponsorType =
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'others'
  | 'in association with'

type Sponsor = {
  name: string
  logo: string
  link: string
  description?: string
  type: SponsorType
}

// Previous year's sponsors
const SponsorsData: Sponsor[] = [
  {
    name: 'Indian Wind Power Association',
    logo: 'iwpa.png',
    link: 'https://windpro.org/',
    type: 'platinum',
  },
  {
    name: 'Enerfra Solutions',
    logo: 'enerfra.png',
    link: 'https://www.enerfra.com/',
    type: 'in association with',
  },
  {
    name: 'Torrent Power Limited',
    logo: 'torrent.png',
    link: 'https://www.torrentpower.com/',
    type: 'in association with',
  },
  {
    name: 'Apraava Energy Private Ltd',
    logo: 'Apraava Energy.png',
    link: 'https://www.apraava.com/',
    type: 'in association with',
  },
  {
    name: 'Vena Energy Infrastructures Service Private Ltd',
    logo: 'Vena Energy.png',
    link: 'https://www.venaenergy.com/',
    type: 'in association with',
  },
  {
    name: 'MSPL Limited',
    logo: 'mspl.jpeg',
    link: 'https://baldota.co.in/mspl-limited',
    type: 'in association with',
  },
  {
    name: 'BluePine Energy',
    logo: 'bluePine.jpg',
    link: 'https://blupineenergy.com/',
    type: 'in association with',
  },
  {
    name: 'Synaptics India Pvt Ltd',
    logo: 'Synaptics.png',
    link: 'https://www.synaptics.com/',
    type: 'diamond',
  },
  {
    name: 'LAPP India Pvt Ltd',
    logo: 'LAPP.png',
    link: 'https://www.lapp.com/en/fr/',
    type: 'gold',
  },
  {
    name: 'BIA Ventures Pvt Ltd',
    logo: 'ather.jpg',
    link: 'https://www.atherenergy.com/',
    type: 'gold',
  },
  {
    name: 'Arcadis',
    logo: 'arcadis.png',
    link: 'https://www.arcadis.com',
    type: 'gold',
  },
  {
    name: 'Log 9 Materials Scientific Pvt Ltd',
    logo: 'Log9.png',
    link: 'https://www.log9materials.com/',
    type: 'silver',
  },
  {
    name: 'Essen Electrical Enterprise',
    logo: 'essen.png',
    link: 'https://www.essenelectric.com/',
    type: 'silver',
  },
  {
    name: 'JVS Electronics Pvt Ltd',
    logo: 'jvs.png',
    link: 'https://www.jvselectronics.in/',
    type: 'others',
  },
  {
    name: 'Anandi Developers and Constructors',
    logo: 'ADC.jpg',
    link: 'https://www.adc.com/',
    type: 'others',
  },
  {
    name: 'Bosch Rexroth (India) Private Limited',
    logo: 'rexroth.png',
    link: 'https://www.boschrexroth.com/en/in/',
    type: 'others',
  },
  {
    name: 'Orbit Techsol India Private Ltd',
    logo: 'orbit.png',
    link: 'https://www.orbitindia.net/',
    type: 'others',
  },
  {
    name: 'Arctictern Solutions',
    logo: 'ARCTICTERN.png',
    link: 'https://www.ARCTICTERN.com/',
    type: 'others',
  },
  {
    name: 'Book Paradise',
    logo: 'bookParadise.png',
    link: 'https://booksparadise.in/',
    type: 'others',
  },
  {
    name: 'S K Publishers',
    logo: 'sk.png',
    link: '#',
    type: 'others',
  },
];

// Current year's sponsors
const currentSponsors: Sponsor[] = [
  {
    name: 'ATDXT',
    logo: 'atdxt.png',
    link: 'https://www.atdxt.com/',
    type: 'platinum'
  },
  {
    name: 'Chamundi Sugars',
    logo: 'chamundeswari.jpg',
    link: 'https://chamundeswarisugars.in/',
    type: 'gold'
  },
  {
    name: 'CtrlS',
    logo: 'CtrlS.png',
    link: 'https://www.ctrls.in/',
    type: 'silver'
  },
  {
    name: 'Arcadis',
    logo: 'Arcadis.jpg',
    link: 'https://www.arcadis.com',
    type: 'silver'
  },
  {
    name: 'Universal AutoFoundry Limited',
    logo: 'https://assets-netstorage.groww.in/stock-assets/logos/GSTK539314.png',
    link: 'https://ufindia.com/',
    type: 'silver'
  },
  {
    name: 'MathWorks',
    logo: 'mathworks.png',
    link: 'https://in.mathworks.com/',
    type: 'others'
  },
  {
    name: 'Ganesha Enterprise, Bangalore',
    logo: 'Ganesha.png',
    link: '#',
    type: 'others'
  },
  {
    name: 'Canara Bank',
    logo: 'canara_bank.jpg',
    link: 'https://canarabank.com/',
    type: 'others'
  },
  {
    name: 'Orbit Techsol',
    logo: 'orbit.png',
    link: 'https://www.orbitindia.net/',
    type: 'others'
  },
  {
    name: 'Women in Cloud',
    logo: 'women.jpg',
    link: 'https://womenincloud.com/',
    type: 'others'
  }
];

export { SponsorsData, currentSponsors };
export type { Sponsor, SponsorType };