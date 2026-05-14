// Test user data — centralized
export const users = {
    admin: {
        email:    "admin@myapp.com",
        password: "Admin@123",
        role:     "admin"
    },
    manager: {
        email:    "manager@myapp.com",
        password: "Manager@123",
        role:     "manager"
    },
    viewer: {
        email:    "viewer@myapp.com",
        password: "Viewer@123",
        role:     "viewer"
    },
    locked: {
        email:    "locked@myapp.com",
        password: "Locked@123",
        role:     "viewer",
        isLocked: true
    }
};

export const invalidUsers = [
    { email: "",                password: "Test@1234",  scenario: "empty email"    },
    { email: "notanemail",      password: "Test@1234",  scenario: "invalid email"  },
    { email: "user@test.com",   password: "",           scenario: "empty password" },
    { email: "user@test.com",   password: "short",      scenario: "short password" }
];