function createUser(user) {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
  });
}

module.exports = createUser;
