function deleteUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  }).then(response => {
    return { status: response.status };
  });
}

module.exports = deleteUser;
