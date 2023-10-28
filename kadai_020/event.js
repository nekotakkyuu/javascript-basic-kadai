const  clickBtn = document.getElementById('btn');
clickBtn.addEventListener('click', () => {
  const childList = document.querySelector('h2');
  childList.textContent = 'ボタンをクリックしました';
});