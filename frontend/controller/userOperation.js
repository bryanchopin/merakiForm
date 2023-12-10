export const UserLogin = async ({ email, password}) => {
    try {
      const response = await fetch("http://localhost:3000/api/logInUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Procesar la respuesta si es necesario
        console.log("Login successful");
      } else {
        // Manejar errores en la respuesta
        console.error("Login failed");
      }
    } catch (error) {
      // Manejar errores de red
      console.error("Network error:", error);
    }
  };
