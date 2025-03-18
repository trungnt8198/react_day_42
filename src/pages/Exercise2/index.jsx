import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
  const [name, setName] = useLocalStorage("name", "F8 User");
  const [age, setAge] = useLocalStorage("age", "18");
  const [address, setAddress] = useLocalStorage("address", "Viet Nam");
  const [hobby, setHobby] = useLocalStorage("hobby", "Đọc Xách");

  return (
    <div>
      <div>
        <label>
          Tên:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tuổi:
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Địa Chỉ:
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Sở Thích:
          <input value={hobby} onChange={(e) => setHobby(e.target.value)} />
        </label>
      </div>
    </div>
  );
}

export default Exercise2;
