import { useState, useEffect } from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((res) => res.json())
      .then((newUser) => setUsers([newUser, ...users]));
  };

  return (
    <div>
      <h2>משתמשים</h2>

      <form onSubmit={addUser}>
        <TextField label="שם פרטי" size="small" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <TextField label="שם משפחה" size="small" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Button type="submit" variant="contained">הוסף</Button>
      </form>

      {users.map((user) => (
        <Card key={user.id} sx={{ width: 250, mb: 1 }}>
          <CardContent>
            <Typography>{user.firstName} {user.lastName}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Users;