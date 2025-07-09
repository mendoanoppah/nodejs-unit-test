import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock('../src/user-repository.js');

const repository = new UserRepository();
const service = new UserService(repository);

test('mock user save', () => {

  const user = {
    id: 1,
    name: 'eko'
  }

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test('mock class findById', () => {
  const user = {
    id: 1,
    name: 'ioo'
  }

  repository.findById.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test('mock class findAll', () => {
  const user = [
    {
      id: 1,
      name: 'ioo'
    },
    {
      id: 2,
      name: 'ioo'
    }
  ];

  repository.findAll.mockReturnValueOnce(user);

  expect(service.findAll()).toEqual(user);
  expect(repository.findAll).toHaveBeenCalled();

});

