"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/services/users";
import useDebounce from "@/hooks/useDebounce";
import TableComponent from "@/components/table";

type User = { id: string; name: string };

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search.trim());

  useEffect(() => {
    let mounted = false;

    const cleanup = () => {
      mounted = true;
    };

    getUser(searchDebounce).then((res) => {
      if (mounted) return;
      setUsers(res);
    });

    return cleanup;
  }, [searchDebounce]);

  return (
    <section className="container">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableComponent
        rows={users}
        columns={[
          { key: "id", title: "ID" },
          { key: "name", title: "Name" },
        ]}
      />
    </section>
  );
};

export default UserList;
