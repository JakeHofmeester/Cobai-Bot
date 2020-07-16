module.exports = function (member) {
  member.guild.channels.cache
    .get("732931727529476199")
    .send(`Hey ${member}, welcome to **Cobai's Server**! `);

  member.roles.add(global.gConfig.default_role);
};
