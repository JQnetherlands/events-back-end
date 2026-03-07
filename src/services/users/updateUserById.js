import usersData from '../../data/users.json' with { type: "json" };
import NotFoundError from '../../errors/NotFoundError.js';

const updateUserById = (id, username, password, name, image) => { 
    const userIndex = usersData.users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
        throw new NotFoundError("user", id);
    }
    const existingUser = usersData.users[userIndex];

    usersData.users[userIndex] = {
        ...existingUser,
        username: username ?? existingUser.username,
        password: password ?? existingUser.password,
        name: name ?? existingUser.name,
        image: image ?? existingUser.image,
    }

    return usersData.users[userIndex];
}
 
export default updateUserById