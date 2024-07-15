import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState<string[]>([]);

  const onclick = () => {
    setName("");
    setLastName([...lastName, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onclick}>Add Name</button>
      <button>Add Guest</button>
    </div>
  );
};

export default GuestList;
