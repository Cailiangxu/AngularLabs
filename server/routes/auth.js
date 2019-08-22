// User class
class User {
  // create new user
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = false;
  }

  // check email and password
  check(email, password) {
    if (this.email === email && this.password === password) {
      this.valid = true;
      return true;
    } else {
      this.valid = false;
      return false;
    }
  }

  // return the user record
  record() {
    return {
      username: this.username,
      birthdate: this.birthdate,
      age: this.age,
      email: this.email,
      valid: this.valid,
    };
  }
};

// create 3 static users
const users = [
  new User('user1', '2001-01-01', 18, 'user1@week5', 'user1'),
  new User('user2', '2002-02-02', 17, 'user2@week5', 'user2'),
  new User('user3', '2003-03-03', 16, 'user3@week5', 'user3'),
];

module.exports = (app) => {
  // POST /api/auth
  app.post('/api/auth', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // bad request
    if (!email || !password) {
      return res.sendStatus(400);
    }
    // check users in the list
    for (let user of users) {
      if (user.check(email, password)) {
        // send results
        return res.json(user.record());
      }
    }
    // wrong email or password
    return res.sendStatus(401);
  });
};
