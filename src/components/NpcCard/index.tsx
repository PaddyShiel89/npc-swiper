export type NpcCardProps = {
  id: string;
  name: string;
  gender: "male" | "female";
  race: "human" | "elf" | "dwarf";
};

const NpcCard: React.FC<NpcCardProps> = (npc) => {
  return (
    <div>
      <h2>{npc.name}</h2>
      <p>
        {npc.race} {npc.gender}
      </p>
    </div>
  );
};

export default NpcCard;
