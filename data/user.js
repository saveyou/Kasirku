import conn from './conn'

export function login(email, password, callback){
	conn.post('/users/login.json', {
		user:{
	    email: email,
	    password: password
		}
  })
  .then(function (response) {
    callback(response);
  })
  .catch(function (error) {
    callback(error.response);
  });
}