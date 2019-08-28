/** * Map the data for JSON */
const dataMapper = (data) => {
  let users = [];
  // if (!data) return null;

  data.forEach(value => {
    users.push({
      'id': value.id,
      'firstName': value.firstName,
      'lastName': value.lastName,
      'email': value.email,
      'mobile': value.mobile
    });
  });
  return users;
};

module.exports = dataMapper;
