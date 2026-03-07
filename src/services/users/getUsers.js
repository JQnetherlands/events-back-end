import usersData from '../../data/users.json' with { type: "json" };

const getUsers = (name) => {
    let users = usersData.users;
    
    if (name) {

        users = users.filter(user => user.name.toLowerCase() === name.toLowerCase());
    }

    return users
}

export default getUsers;