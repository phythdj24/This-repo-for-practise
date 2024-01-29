import crypto from 'crypto'


const SECRET ='SANGAM_REST_API';

export const random = ()=> crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) =>{
     return crypto.createHmac('sh256', [salt, password].join('/')).update(SECRET).digest('hex')
};

