export const getGuestUserName = username => {
  if (username.length < 11) return username;
  return username.slice(0, 6) + username.slice(username.length - 4, username.length);
};

export const getUserName = player => {
  return player.username || player.fullName;
};

export const getPlayerCountry = player => {
  const { countryCode: code, countryFlag: flag, countryName: name } = player;
  return { code, flag, name };
};

export default function getPlayer(player, color) {
  return {
    name: getUserName(player),
    country: getPlayerCountry(player),
    picture: player.picture,
    color,
  };
}
