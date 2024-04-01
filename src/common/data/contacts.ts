//images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";

interface ChatUserProps {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  bAddress: string,
  sAddress: string
}

const users: Array<ChatUserProps> = [
  {
    id: 1,
    name: "Donald Risher",
    address: "1187 Lockhart Drive, Barrie, Canada",
    email: "DonaldRisher@Dashonic.com",
    phone: "519-532-1668",
    bAddress: "1012 Blue Rocks Road, Mahone Bay, Canada, B0J 2C0",
    sAddress: "1012 Blue Rocks Road, Mahone Bay, Canada, B0J 2C0"
  },
  {
    id: 2,
    name: "Helen Barron",
    address: "1925 Nelson Street, Devlin, Canada",
    email: "HelenBarron@Dashonic.com",
    phone: "705-309-6262",
    bAddress: "1012 Blue Rocks Road, Mahone Bay, Canada, B0J 2C0",
    sAddress: "1012 Blue Rocks Road, Mahone Bay, Canada, B0J 2C0"
  },
  {
    id: 3,
    name: "Philip Theroux",
    address: "1012 Blue Rocks Road, Mahone Bay, Canada, B0J 2C0",
    email: "PhilipTheroux@Dashonic.com",
    phone: "807-486-0912",
    bAddress: "767 9th Avenue,Woodstock,Canada",
    sAddress: "767 9th Avenue,Woodstock,Canada"
  },
  {
    id: 4,
    name: "Justin McClain",
    address: "767 9th Avenue,Woodstock,Canada",
    email: "JustinMcClain@Dashonic.com",
    phone: "705-878-1639",
    bAddress: "767 9th Avenue,Woodstock,Canada",
    sAddress: "767 9th Avenue,Woodstock,Canada"
  },
  {
    id: 5,
    name: "Sharon Carver",
    address: "2038 Kennedy Rd, Lindsay, Canada",
    email: "SharonCarver@Dashonic.com",
    phone: "705-878-1640",
    bAddress: "767 9th Avenue,Woodstock,Canada",
    sAddress: " 2775 Papineau Avenue,Quebec,Montreal"
  },
  {
    id: 6,
    name: "Jody Tondreau",
    address: "4563 Orenda Rd,Ontario",
    email: "JodyTondreau@Dashonic.com",
    phone: "705-828-1639",
    bAddress: " 2775 Papineau Avenue,Quebec,Montreal",
    sAddress: " 2775 Papineau Avenue,Quebec,Montreal"
  },
  {
    id: 7,
    name: "Dennis Goulet",
    address: " 2775 Papineau Avenue,Quebec,Montreal",
    email: "DennisGoulet@Dashonic.com",
    phone: "705-238-1639",
    bAddress: "4563 Orenda Rd,Ontario",
    sAddress: "4563 Orenda Rd,Ontario"
  },
  {
    id: 8,
    name: "Cecelia Farrell",
    address: "1827 Park Ct,Jasper,Caneda",
    email: "CeceliaFarrell@Dashonic.com",
    phone: "705-878-2139",
    bAddress: "4563 Orenda Rd,Ontario",
    sAddress: "4563 Orenda Rd,Ontario"
  },
  {
    id: 9,
    name: "Peter Dryer",
    address: "3244 Kinchant St,British Columbia",
    email: "PeterDryer@Dashonic.com",
    phone: "258-878-1639",
    bAddress: "4563 Orenda Rd,Ontario",
    sAddress: "4563 Orenda Rd,Ontario"
  }
];
const userProfile: Object = {
  id: 1,
  name: "Cynthia Price",
  designation: "UI/UX Designer",
  img: "avatar1",
  projectCount: 125,
  revenue: 1245,
  personalDetail:
    "Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.",
  phone: "(123) 123 1234",
  email: "cynthiaskote@gmail.com",
  location: "California, United States",
  experiences: [
    {
      id: 1,
      iconClass: "bx-server",
      link: "#",
      designation: "Back end Developer",
      timeDuration: "2016 - 19",
    },
    {
      id: 2,
      iconClass: "bx-code",
      link: "#",
      designation: "Front end Developer",
      timeDuration: "2013 - 16",
    },
    {
      id: 3,
      iconClass: "bx-edit",
      link: "#",
      designation: "UI /UX Designer",
      timeDuration: "2011 - 13",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Skote admin UI",
      startDate: "2 Sep, 2019",
      deadline: "20 Oct, 2019",
      budget: "$506",
    },
    {
      id: 2,
      name: "Skote admin Logo",
      startDate: "1 Sep, 2019",
      deadline: "2 Sep, 2019",
      budget: "$94",
    },
    {
      id: 3,
      name: "Redesign - Landing page",
      startDate: "21 Sep, 2019",
      deadline: "29 Sep, 2019",
      budget: "$156",
    },
    {
      id: 4,
      name: "App Landing UI",
      startDate: "29 Sep, 2019",
      deadline: "04 Oct, 2019",
      budget: "$122",
    },
    {
      id: 5,
      name: "Blog Template",
      startDate: "05 Oct, 2019",
      deadline: "16 Oct, 2019",
      budget: "$164",
    },
    {
      id: 6,
      name: "Redesign - Multipurpose Landing",
      startDate: "17 Oct, 2019",
      deadline: "05 Nov, 2019",
      budget: "$192",
    },
    {
      id: 7,
      name: "Logo Branding",
      startDate: "04 Nov, 2019",
      deadline: "05 Nov, 2019",
      budget: "$94",
    },
  ],
};
export { users, userProfile };