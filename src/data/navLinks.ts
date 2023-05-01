import {
  IconDefinition,
  faHelmetBattle,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/pro-regular-svg-icons";

const navLinks: navLinkData[] = [
  {
    name: "Search",
    icon: faMagnifyingGlass,
    mobileOrder: 1,
    path: "/",
  },
  {
    name: "Settings",
    icon: faSliders,
    mobileOrder: 0,
    path: "/search-settings",
  },
  {
    name: "My NPCs",
    icon: faHelmetBattle,
    mobileOrder: 2,
    path: "/my-npcs",
  },
];

export default navLinks;

export interface navLinkData {
  name: string;
  icon: IconDefinition;
  mobileOrder: number;
  path: string;
}
