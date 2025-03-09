export type SpeakerType = {
  id: number;
  name: string;
  designation: string;
  topic?: string;
  imageLink: string;
};

export const keynoteSpeakers: SpeakerType[] = [
  {
    id: 1,
    name: "Sri. S S Iyengar",
    designation: "Distinguished University Professor, Florida International University (FIU), Miami",
    imageLink: "/speakers/ss_iyenger.jpeg",
  },
  {
    id: 2,
    name: "Chaitra Vedullapalli",
    designation: "Cofounder & CMO, Meylah",
    imageLink: "/speakers/chaitra_v.jpeg",
  },
  {
    id: 3,
    name: "Prof. Dr.-Ing. Vinod Rajamani",
    designation: "Professor, University of Applied Sciences and Arts Dortmund",
    imageLink:
      "https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg",
  },
];

export const aiForAllSpeakers: SpeakerType[] = [
  {
    id: 4,
    name: "Mr. Raj Pagaku",
    designation: "VP Engineering, Security Business Unit, Juniper Networks India Pvt Ltd, Bengaluru, India",
    topic: "Inclusive AI: Shaping the Future for Everyone",
    imageLink:
      "https://media.licdn.com/dms/image/v2/D5603AQHYe3rt7tTUZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690629699833?e=1735776000&v=beta&t=kILq2XM2fufTdX-vVWqQWYw2E8EJGwS_sSRuuxW5dfs",
  },
  {
    id: 5,
    name: "Dr. Nagaraju G",
    designation: "Director, Ophthalmology, Minto Eye Hospital, BMCRI, Bengaluru",
    topic: "AI in Health Care",
    imageLink: "https://mhbmcri.karnataka.gov.in/storage/pdf-files/DrNagraj.jpg",
  },
];

export const digitalTransformationSpeakers: SpeakerType[] = [
  {
    id: 6,
    name: "Dr. K B Shyam Prasad",
    designation: "Momentive Performance Materials India Pvt Ltd, India Technology Centre, Bengaluru",
    topic: "Accelerate Innovation through Digital Tools",
    imageLink:
      "https://media.licdn.com/dms/image/v2/C5603AQH8tHEbqXh4dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517713735746?e=1735776000&v=beta&t=PEUeA-D3bFctLoqUEMUQ_8IAL_IlunJ3RPc2rVHb9kI",
  },
  {
    id: 7,
    name: "Mr. Abhi Anand",
    designation: "Director (Financial Services Leader), PwC, Bagmane Tech Park, Bengaluru",
    topic: "Sustainable AI Applications",
    imageLink:
      "https://media.licdn.com/dms/image/v2/D5603AQHZ1kZTvzQ-tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692179908763?e=1735776000&v=beta&t=Rya_Qbez8e9baX4U9ZtaTIalpl8o95Z5xbyI_Gf_Q6Y",
  },
];
