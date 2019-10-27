import types from './types';

export const setName = name => ({
  type: types.SET_NAME,
  name,
});

export const setGreeting = greeting => ({
  type: types.SET_GREETING,
  greeting,
});
