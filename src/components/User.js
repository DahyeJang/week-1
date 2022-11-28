import Button from "./Button";

//  User 컴포넌트를 분리해서 구현
// 하나씩 이름이랑 나이가 나오는 부분
function User(props) {
  console.log(props); //handelDelete, user 불러와짐
  return (
    <div className="app-style">
      <div>{props.user.age}살 - </div>
      <div>{props.user.name}</div>
      <Button color="red" onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </Button>
    </div>
  );
}

export default User;
