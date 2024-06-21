document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    const userContainer = document.getElementById('userContainer');

    function fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          const randomUserIndex = Math.floor(Math.random() * users.length);
          const randomUser = users[randomUserIndex];

          const userDiv = document.createElement('div');
          userDiv.classList.add('user-card');
          userDiv.innerHTML = `
            <h3>${randomUser.name}</h3>
            <p><strong>Username:</strong> ${randomUser.username}</p>
            <p><strong>Email:</strong> ${randomUser.email}</p>
            <p><strong>Phone:</strong> ${randomUser.phone}</p>`;

          userContainer.innerHTML = '';
          userContainer.appendChild(userDiv);
        })
        .catch(err => console.log(err));
    }

    fetchButton.addEventListener('click', fetchUsers);
  });