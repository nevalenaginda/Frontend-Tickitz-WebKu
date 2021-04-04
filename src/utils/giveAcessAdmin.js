const giveAcessAdmin = (role) => {
  return role !== 0 ? "d-none" : "";
};

export default giveAcessAdmin;
