import usersData from '../../data/users.json' with { type: "json" };
import { v4 as uui } from 'uuid';

const createUser = (username, password, name, image) => { 
    const newUser = {
        id: uui(),
        username,
        password,
        name,
        image
    };

    usersData.users.push(newUser);
    
    return newUser
}
 
export default createUser;