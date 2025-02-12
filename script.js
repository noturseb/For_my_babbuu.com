function showResponse(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'yes') {
      responseElement.innerHTML = 'Yay! You are my Valentine! 💖';
      responseElement.style.color = '#d81b60';
    } else if (answer === 'no') {
      responseElement.innerHTML = 'Oh no! Maybe next time! 😢';
      responseElement.style.color = '#f50057';
    }
  }
  