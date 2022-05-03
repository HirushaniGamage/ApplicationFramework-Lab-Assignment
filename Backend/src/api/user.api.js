const { v4: uuidv4 } = require("uuid");
const { use } = require("../routes/item.route");

var users = new Map();

/*
 *@Description createProfile
 */

const saveUser = ({ name, email, mobileNumber, password, role }) => {
  const user = {
    id: uuidv4(),
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    password: password,
    role: (role = 1 ? UserRole.CUSTOMER : UserRole.TRADER),
    createdOn: new Date(),
    updatedOn: new Date(),
  };
  users.set(user.id, user);
};

/*
 *@Description viewCustomers
 */

const getClientDetails = () => {
  let customers = new Map();

  for (const user of users.values()) {
    if (user.role == UserRole.CUSTOMER) {
      (user.password = null), customers.set(user.id, user);
    }
  }
  return [...customers.values()];
};

//Enum

const UserRole = {
  CUSTOMER: 1,
  TRADER: 2,
};
Object.freeze(UserRole);

module.exports = {
  saveUser,
  getClientDetails,
};
