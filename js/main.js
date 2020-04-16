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




// services
let servicesWrapper = document.querySelector('.services-wrapper');
let servicesFirstBtn = document.querySelector('.first-btn');
let servicesPogreb = document.querySelector('.pogreb-content');
let servicesFirstBackBtn = document.querySelector('.pogreb-btn');


servicesFirstBtn.addEventListener('click', () => {
  servicesWrapper.style.display = 'none';
  servicesPogreb.classList.add('fade-in');
  servicesPogreb.style.display = 'block';
});

servicesFirstBackBtn.addEventListener('click', () => {
  servicesWrapper.style.display = 'flex';
  servicesPogreb.style.display = 'none';
});


// portfolio
let portfolioBtn = document.querySelector('.portfolio-btn');
let portfolioBlock = document.querySelector('.portfolio');
let portfolieNext = document.querySelector('.portfolio-next');
let portfolioBackBtn = document.querySelector('.portfolio-back-btn');

portfolioBtn.addEventListener('click', () => {
  portfolioBlock.style.display = 'none';
  portfolieNext.classList.add('fade-in');
  portfolieNext.style.display = 'flex';
});

portfolioBackBtn.addEventListener('click', () => {
  portfolioBlock.style.display = 'flex';
  portfolieNext.style.display = 'none';
});