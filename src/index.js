const input = document.querySelector("input");
const ul = document.querySelector("ul");

// localStorage 영속성 관리
if (!localStorage.todoList) {
  localStorage.todoList = ul.innerHTML;
} else {
  ul.innerHTML = localStorage.todoList;
}

input.addEventListener("keypress", (e) => {
  // Enter 입력
  if (input.value !== "" && e.code === "Enter") {
    // 리스트에 추가
    let newList = `<li><i class="far fa-circle" aria-hidden="true"></i><span class="todo">${input.value}</span></li>\n`;
    // 로컬스토리지에 저장 및 적용
    localStorage.todoList = newList.concat(localStorage.todoList);
    ul.innerHTML = localStorage.todoList;
    // 입력 초기화
    input.value = "";
  }
});

ul.addEventListener("click", (e) => {
  // 체크 박스 클릭
  if (e.target && e.target.classList.contains("far")) {
    // 체크된 박스로 변경
    e.target.className = "fas fa-check-circle";
    // 취소줄 긋기
    e.target.nextElementSibling.classList.add("checked");
    // 1초 후 해당 리스트 삭제
    setTimeout(() => {
      e.target.parentNode.remove();
      localStorage.todoList = ul.innerHTML;
      ul.innerHTML = localStorage.todoList;
    }, 200);
  }
});
