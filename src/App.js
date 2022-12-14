import React, { useState } from "react";
import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import Button from "./components/Button";
import User from "./components/User";

// App ์ปดํฌ๋ํธ
//์ ์  ๊ฐ์ ์ถ๊ฐ์ ์ญ์ ๋ฅผ ํตํด ๋ณ๊ฒฝ๋๋ฏ๋ก useState์์ ๋ฃ์ด์ค๋ค
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "์ก์ค๊ธฐ" },
    { id: 2, age: 24, name: "์ก๊ฐ" },
    { id: 3, age: 21, name: "๋ฅดํ์ด" },
    { id: 4, age: 29, name: "๊ตฌ๊ตํ" },
  ]);

  //์ ์ ์ ์ด๋ฆ๊ณผ ๋์ด๋ฅผ ๋ด์ useState๋ฅผ ๋ง๋ ๋ค
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // ์ ์ ๋ฅผ ์ถ๊ฐํด์ฃผ๋ ๊ธฐ๋ฅ์ ํจ์๋ฅผ ๋ง๋๋๋ฐ, ์ด ํจ์๋ newUser๋ผ๋ ๋ณ์์ ์๋ก์ด ์ ์ ๋ฅผ ์ถ๊ฐํด์ค๋ค
  const handleAdd = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    //์ ์  ์ ์ฒด์ ์์์ ์ถ๊ฐํ newUser๋ฅผ setUsers๋ก ์ ์ฅํ๋ค
    setUsers([...users, newUser]);
  };

  // ์ ์ ๋ฅผ ์ญ์ ํ๋ ํจ์๋ฅผ ๋ง๋ค์ด์ค๋ค. id๊ฐ์ ๋งค๊ฐ๋ณ์๋ก ํ๊ณ ,
  const handleDelete = (id) => {
    //์๋ก์ด ์ ์  ๋ฆฌ์คํธ๋ฅผ ๋ง๋๋๋ฐ, user๋ฅผ ๊ฐ์ ธ์ user์ id์ ๊ฐ์ ธ์จ ๋งค๊ฐ๋ณ์์ id๊ฐ ๋ค๋ฅธ ๋ฆฌ์คํธ๋ง
    const newUserList = users.filter((user) => user.id !== id);

    //setUsers์ ๋ฃ์ด์ค๋ค
    setUsers(newUserList);
  };

  return (
    <div>
      {/* ์ด๋ฆ ์๋ ฅ ์นธ ๋ง๋ค๊ธฐ */}
      <input
        placeholder="์ด๋ฆ์ ์๋ ฅํด์ฃผ์ธ์"
        value={name}
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="๋์ด๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
        value={age}
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setAge(e.target.value)}
      />
      {/* // ์ถ๊ฐํ๊ธฐ ๋ฒํผ์ ํด๋ฆญํ๋ฉด ์์ handleAdd ํจ์๊ฐ ์คํ๋๋ค */}
      <Button color="green" onClick={handleAdd}>
        ์ถ๊ฐํ๊ธฐ
      </Button>
      {/* // ์ ์ฒด ์ ์  ๋ฆฌ์คํธ๋ฅผ ๋ณด์ฌ์ฃผ๋๋ฐ */}
      <div className="all">
        {users.map((user) => {
          if (user.age < 25) {
            return (
              <User user={user} key={user.id} handleDelete={handleDelete} />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
