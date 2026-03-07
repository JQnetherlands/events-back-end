import usersData from '../../data/users.json' with { type: "json" };
import NotFoundError from '../../errors/NotFoundError.js';

const deleteUser = (id) => {
    const userIndex = usersData.users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
        throw new NotFoundError("user", id);
    }

    const [deletedUser] = usersData.users.splice(userIndex, 1);
    
    return deletedUser;
}

export default deleteUser;