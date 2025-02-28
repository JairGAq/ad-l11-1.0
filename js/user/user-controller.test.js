const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// aqui empiezo
//Prueba: Agregar un usuario que no está en la lista
test('add user that is not in the userController', () => {
  let user = new User(5678, "Maria", "maria@example.com");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});
//Prueba: Remover un usuario que no está en la lista
test('remove user that is not in the userController', () => {
  let user = new User(5678, "Maria", "maria@example.com");
  userController.remove(user);
  expect(userController.getUsers()).not.toContain(user);
});
//Prueba 1: Encontrar usuario por email existente
test('find user by email', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});
//Prueba 2: No encontrar usuario por email inexistente
test('find user by non-existing email', () => {
  expect(userController.findByEmail("nonexistent@example.com")).toBeUndefined();
});
//Prueba 1: Encontrar usuario por ID existente
test('find user by ID', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
});
//Prueba 2: No encontrar usuario por ID inexistente
test('find user by non-existing ID', () => {
  expect(userController.findById(9999)).toBeUndefined();
});