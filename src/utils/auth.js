module.exports = {
  login() {
   
     localStorage.authenticated=true,
      localStorage.token=Math.random().toString(36).substring(7)
  },


  getToken() {
    return localStorage.token
  },

  logout() {
    delete localStorage.token
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest( cb) {
  setTimeout(() => {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
   
  }, 0)
}