import { useAuth } from "../../controller/AuthContext";

export default function Admin() {
  const { logout, isAuthenticated, setIsAuthenticated } = useAuth();

  console.log("admin", isAuthenticated);

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Admin</h1>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <h1>Not logged in</h1>
      )}
    </>
  );
}
