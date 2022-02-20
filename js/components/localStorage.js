export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }
  return JSON.parse(value);
}

export function clearStorage() {
  localStorage.clear();
}

// USER & TOKEN

export const tokenKey = "token";
export const userKey = "user";

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUser() {
  const user = getFromStorage(userKey);
  if (user) {
    return user.username;
  } else {
    return null;
  }
}

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}
