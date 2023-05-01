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
    path: "/",
  },
  {
    name: "Settings",
    icon: faSliders,
    path: "/search-settings",
  },
  {
    name: "My NPCs",
    icon: faHelmetBattle,
    path: "/my-npcs",
  },
];

export default navLinks;

export interface navLinkData {
  name: string;
  icon: IconDefinition;
  path: string;
}
