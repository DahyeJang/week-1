import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import Button from "./components/Button";
import User from "./components/User";

// App 컴포넌트
//유저 값은 추가와 삭제를 통해 변경되므로 useState안에 넣어준다
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  //유저의 이름과 나이를 담을 useState를 만든다
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 유저를 추가해주는 기능의 함수를 만드는데, 이 함수는 newUser라는 변수에 새로운 유저를 추가해준다
  const handleAdd = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    //유저 전체와 위에서 추가한 newUser를 setUsers로 저장한다
    setUsers([...users, newUser]);
  };

  // 유저를 삭제하는 함수를 만들어준다. id값을 매개변수로 하고,
  const handleDelete = (id) => {
    //새로운 유저 리스트를 만드는데, user를 가져와 user의 id와 가져온 매개변수의 id가 다른 리스트만
    const newUserList = users.filter((user) => user.id !== id);

    //setUsers에 넣어준다
    setUsers(newUserList);
  };

  return (
    <div>
      {/* 이름 입력 칸 만들기 */}
      <input
        placeholder="이름을 입력해주세요"
        value={name}
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="나이를 입력해주세요"
        value={age}
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      {/* // 추가하기 버튼을 클릭하면 위의 handleAdd 함수가 실행된다 */}
      <Button color="green" onClick={handleAdd}>
        추가하기
      </Button>
      {/* // 전체 유저 리스트를 보여주는데 */}
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
