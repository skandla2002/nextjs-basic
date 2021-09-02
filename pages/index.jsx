import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Child = () => {
  return <a>Move to '/tomato11'</a>;
};

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push("/tomato")}>
        tomato로 가기
      </button>
      <p>이름</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
        {name}으로 가기
      </button>
    </div>
  );
};

export default App;
