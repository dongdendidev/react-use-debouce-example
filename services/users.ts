export const getUser = (search: string) => {
  fetch(`/api/users?s=${search}`);
  return Promise.resolve(data.filter((item) => item.name.includes(search)));
};

const data = Array.from({ length: 100 }).map((_, index) => ({
  id: index + "",
  name: `Name ${index + 1}`,
}));
