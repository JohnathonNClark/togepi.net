const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


function openLightbox(img) {
  lightboxImg.src = img.src;
 
  lightbox.style.visibility = 'visible';
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');

  setTimeout(() => {
    lightbox.style.visibility = 'hidden';
    lightboxImg.src = ''; 
  }, 300);
}
