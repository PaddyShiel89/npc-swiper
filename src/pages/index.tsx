import React from "react";
import { GetStaticProps } from "next";

import NpcCard, { NpcCardProps } from "@/components/NpcCard";

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = [createNpcData(), createNpcData(), createNpcData()];
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: NpcCardProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <div className="page">
      <h1>Public Feed</h1>
      <main>
        {props.feed.map((npc, i) => (
          <NpcCard key={i} {...npc} />
        ))}
      </main>
    </div>
  );
};

export default Home;

function createNpcData() {
  const names = [
    "Gandalf",
    "Obi-Wan Kenobi",
    "Xena",
    "Zagreus",
    "Yennefer of Vengerberg",
  ];
  const genders = ["male", "female"];
  const races = ["human", "elf", "dwarf"];

  return {
    name: getRandomItem(names),
    gender: getRandomItem(genders),
    race: getRandomItem(races),
  };
}

const getRandomItem = (arr: any[]) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
