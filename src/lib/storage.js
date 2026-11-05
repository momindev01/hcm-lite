export function getAccounts() {
  const accounts = localStorage.getItem("accounts");

  return accounts ? JSON.parse(accounts) : [];
}

export function saveAccount(account) {
  const accounts = getAccounts();

  accounts.push(account);

  localStorage.setItem("accounts", JSON.stringify(accounts));
}

export function saveSession(user) {
  const loggedInUser = {
    name: user.name,
    email: user.email,
    role: user.role
  };

  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
}

export function getSession() {
  const user = localStorage.getItem("loggedInUser");

  return user ? JSON.parse(user) : null;
}

export function clearSession() {
  localStorage.removeItem("loggedInUser");
}


export function createDemoAdmin() {
  const accounts = getAccounts();

  const adminExists = accounts.some(
    (account) => account.role === "admin"
  );

  if (adminExists) return;

  const adminAccount = {
    name: "System Admin",
    email: "admin@hcmlite.com",
    password: "admin123",
    role: "admin"
  };

  saveAccount(adminAccount);
}
