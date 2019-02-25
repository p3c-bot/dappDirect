var changellyModal = document.getElementById('changellyModal');
var changellyButton = document.getElementById('changellyButton');
var changellyCloseButton = document.getElementsByClassName('changellyModal-close')[0];
changellyCloseButton.onclick = function () {
    changellyModal.style.display = 'none';
};

changellyButton.onclick = function widgetClick(e) {
    e.preventDefault();
    changellyModal.style.display = 'block';
};