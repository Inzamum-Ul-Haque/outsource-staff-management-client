import React, { createContext, useState } from "react";

export const RoleContext = createContext();

const RoleBasedInfo = ({ children }) => {
  const [user, setUser] = useState(null);

  // test role based menu for users
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
    user,
    setUser,
  };

  return (
    <RoleContext.Provider value={roleInfo}>{children}</RoleContext.Provider>
  );
};

export default RoleBasedInfo;
