import {
  IconDefinition,
  faHelmetBattle,
  faMagnifyingGlass,
  faSliders,
  faSparkles,
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
  {
    name: "What's New?",
    icon: faSparkles,
    path: "/whats-new",
  },
];

export default navLinks;

export interface navLinkData {
  name: string;
  icon: IconDefinition;
  path: string;
}
