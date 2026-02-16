

class UserController {
  async getUsers(req, res) {
    res.send('Hello World');
  }
}

export default new UserController();