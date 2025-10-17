
import jwt from 'jsonwebtoken';

const tokeGenerator = (data) =>{
  // data, secret key , expiring timing
return jwt.sign(data,process.env.SECRET_KEY,{expiresIn:"20m"});
}

export default tokeGenerator;