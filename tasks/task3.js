function updateUser(id, updatedData) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    return response.json();
  });
}

module.exports = updateUser;
