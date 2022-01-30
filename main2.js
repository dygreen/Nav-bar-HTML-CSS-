const toggle = document.querySelector('.navbar__toggle');
/* HTML 안에 있는 class node 중에 navbar toggle라는 클래스를 가진 아이를 찾아서 'toggle'에 연결시켜줌 */
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    /* menu랑 icons에 있는 classlist 중에 active class를 toggling할 것임
    = 마우스를 클릭했을 때 menu와 icons의 class가 active가 없다면 active를 추가해주고
    있다면 다시 빼주는 일을 함 */
});