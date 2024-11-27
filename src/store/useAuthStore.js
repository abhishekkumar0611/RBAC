import create from 'zustand';

const rolesPermissions = {
  admin: ["view_dashboard", "manage_users"],
  user: ["view_dashboard"],
  guest: [],
};

export const useAuthStore = create((set) => ({
  user: null,
  login: (username, role) =>
    set({
      user: { username, role, permissions: rolesPermissions[role] || [] },
    }),
  logout: () => set({ user: null }),
  hasPermission: (permission) => (state) =>
    state.user?.permissions.includes(permission),
}));
