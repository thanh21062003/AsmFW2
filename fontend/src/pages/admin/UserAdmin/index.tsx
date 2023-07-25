import { Button, Popconfirm, Space, Table, notification } from "antd";
import React, { useEffect } from "react";
import { deleteProduct } from "../../../api/product";
import { ColumnsType } from "antd/es/table";



import { User } from "../../../interfaces/auth.type";
import { getAllUser } from "../../../api/user";


export default function UsersAdmin() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isOpenCEModal, setIsOpenCEModal] = React.useState(false);
  const [userEdit, setUserEdit] = React.useState<User | null>(null);

  useEffect(() => {
    const fetchAllUser = async () => {
      const { data } = await getAllUser();
      setUsers(data.data as User[]);
    };
    fetchAllUser();
  }, []);


  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

  ];
  return (
    <div>
      <Table dataSource={users} columns={columns} />
     
    </div>
  );
}
