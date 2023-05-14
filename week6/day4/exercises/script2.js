(function(userName) {
  const navbar = document.querySelector('.navbar');
  const userDiv = document.createElement('div');
  userDiv.classList.add('navbar-text', 'ml-auto');
  userDiv.innerHTML = `
    <span class="mr-2">${userName}</span>
    <img src="profile-picture.jpg" alt="Profile Picture" class="rounded-circle" width="30" height="30">
  `;
  navbar.appendChild(userDiv);
})('');
