document.getElementById('openModalBtn').onclick = function () {
  document.getElementById('modal').style.display = 'block';
};
document.getElementById('closeModalBtn').onclick = function () {
  document.getElementById('modal').style.display = 'none';
};
window.onclick = function (e) {
  if (e.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
};