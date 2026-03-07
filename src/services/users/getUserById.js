import usersData from '../../data/users.json' with { type: "json" };
import NotFoundError from '../../errors/NotFoundError.js';

const getUserById = (id) => {
    const user = usersData.users.find((u) => u.id === id);

    if (!user) {
        throw new NotFoundError("user", id)
    } else {
        return user 
    }

    
}

export default getUserById;

