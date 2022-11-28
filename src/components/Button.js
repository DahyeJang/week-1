// 버튼 컴포넌트 생성
function Button(props) {
  //구조분해할당한다. 추가하기와 삭제하기의 onClick 함수가 다름
  const { color, onClick, children } = props;

  //만약 color값이 있다면
  if (color)
    return (
      <button style={{ background: color, color: "white" }} onClick={onClick}>
        {children}
      </button>
    );
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
