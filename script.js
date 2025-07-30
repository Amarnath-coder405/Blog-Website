/* image slider section*/
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[n - 1].classList.add('active');
  dots[n - 1].classList.add('active');
}
/* add comment section*/
function addComment() {
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || message === '') {
        alert('Please enter both name and message.');
        return;
      }

      const commentList = document.getElementById('commentList');
      const comment = document.createElement('div');
      comment.className = 'comment';
      comment.innerHTML = `<h4>${name}</h4><p>${message}</p>`;
      commentList.prepend(comment);

      // Clear inputs
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
    }