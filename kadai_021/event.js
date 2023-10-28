const  clickBtn = document.getElementById('btn');
clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    const childList = document.querySelector('h2');
    childList.textContent = 'ボタンをクリックしました';
  }, 2000);
});