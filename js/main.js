let certificatePopup = document.querySelector('.certificate-popup'),
  certificatePics = document.querySelectorAll('.certificate-pic'),
  certificatePicOpen = document.querySelector('.certificate-pic-open');

function handleSertificateClick() {
  for (let i = 0; i < certificatePics.length; i++) {
    certificatePics[i].addEventListener('click', function () {
      certificatePopup.classList.add('active');
      certificatePicOpen.src = certificatePics[i].src;
      certificatePicOpen.classList.add('active');
    });
  }
}

handleSertificateClick();

// check on clicking on the picture
certificatePopup.addEventListener('click', (event) => {
  if (!certificatePicOpen.contains(event.target)) {
    certificatePopup.classList.remove('active');
  }
});