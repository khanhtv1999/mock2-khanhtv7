import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Dropdown, Menu } from "antd";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <p>My Profile</p>,
      },
      {
        key: "2",
        label: <p>Order History</p>,
      },
      {
        key: "3",
        label: <p>Logout</p>,
      },
    ]}
  />
);
export default function AvatarUser() {
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="data:image/jpeg;base64,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"
        />
      </Stack>
    </Dropdown>
  );
}
