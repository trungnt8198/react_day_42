import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
  const [name, setName] = useLocalStorage("name", "F8 User");
  const [age, setAge] = useLocalStorage("age", "18");
  const [address, setAddress] = useLocalStorage("address", "Viet Nam");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
    </div>
  );
}

export default Exercise2;
