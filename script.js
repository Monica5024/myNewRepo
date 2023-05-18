function resizeHearts() {
  const container = document.querySelector('.container');
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const hearts = document.querySelectorAll('.heart, .blinking-heart');
  hearts.forEach((heart) => {
    const heartSize = Math.min(containerWidth, containerHeight) * 0.1;
    heart.setAttribute('width', heartSize + 'px');
    heart.setAttribute('height', heartSize + 'px');
  });
}

window.addEventListener('resize', resizeHearts);
resizeHearts();

function showPopup(answer) {
    if (answer === 'Yes') {
      alert("Thank you, you have really good taste, they are my dogs :)");
    } else if (answer === 'No') {
      alert("I am sorry, you are not allowed to treat cute dogs like this,please try again.");
    }
  }