const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('.save-dialog');
const closeButton = saveDialog.querySelector('.save-dialog__close');

saveButton.addEventListener('click', () => saveDialog.showModal());
closeButton.addEventListener('click', () => saveDialog.close());
