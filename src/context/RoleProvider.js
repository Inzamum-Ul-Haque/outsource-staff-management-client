import React, { createContext } from "react";

export const RoleContext = createContext();

const RoleBasedInfo = ({ children }) => {
  const roles = {
    role1: {
      roleId: 101,
      roleMenus: ["User Registration", "Key Info"],
    },
    role2: {
      roleId: 102,
      roleMenus: ["Personal Info"],
    },
    role3: {
      roleId: 103,
      roleMenus: ["Search Info"],
    },
  };

  const roleInfo = {
    roles,
  };

  return (
    <RoleContext.Provider value={roleInfo}>{children}</RoleContext.Provider>
  );
};

export default RoleBasedInfo;
