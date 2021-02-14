const input = document.querySelector("input");
const ul = document.querySelector("ul");

input.addEventListener("keydown", (e) => {
  // Enter 입력
  if (input.value !== "" && e.code === "Enter") {
    // 리스트에 추가
    ul.insertAdjacentHTML(
      "afterbegin",
      `<li>
        <i class="far fa-circle"></i>
        <span class="todo">${input.value}</span>
       </li>`
    );
    console.log(input);
    // 로컬스토리지에 저장
    // localStorage.setItem("todoList", )
    // 입력 초기화, Id 증가
    input.value = "";
  }
});

document.addEventListener("click", (e) => {
  // 체크 박스 클릭
  if (e.target && e.target.classList.contains("far")) {
    console.dir(e.target.nextElementSibling);

    // 체크된 박스로 변경
    e.target.className = "fas fa-check-circle";
    // 취소줄 긋기
    e.target.nextElementSibling.classList.add("checked");
    // 1초 후 해당 리스트 삭제
    setTimeout(() => {
      e.target.parentNode.remove();
    }, 750);
  }
});
