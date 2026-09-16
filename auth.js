function login(username, password) {
  if (username === 'admin' && password === '1234') {
    return true;
  }
  return false;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { login };
}
