const navLinks: navLinkData[] = [
  {
    name: "Search",
    path: "/",
  },
  {
    name: "Search settings",
    path: "/search-settings",
  },
  {
    name: "My NPCs",
    path: "/my-npcs",
  },
  {
    name: "What's New?",
    path: "/whats-new",
  },
];

export default navLinks;

export interface navLinkData {
  name: string;
  path: string;
}
