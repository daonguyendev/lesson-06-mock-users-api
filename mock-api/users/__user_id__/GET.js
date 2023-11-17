module.exports = function (req, resp) {
  let users = require("../../users/GET.json");
  let user = users.find((user) => user.id == req.params.user_id);

  resp.json({
    id: user.id,
    name: user.name,
  });
};
