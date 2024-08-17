const bcrypt = require('bcrypt');

const plainTextPassword = 'hashedpassword123'; // The password you want to hash

const saltRounds = 10; // Number of salt rounds (default is 10, you can increase it for more security)

bcrypt.hash(plainTextPassword, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hashedPassword);
  }
});
