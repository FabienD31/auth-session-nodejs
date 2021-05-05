const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    'mongodb+srv://MEVN-app:Atchoum1@cluster0.7wx4z.mongodb.net/auth-session-nodejs?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => {
    console.log(err);
  });