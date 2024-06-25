/** @format */
import { defineStore } from "pinia";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    message: "", // Add a message property to the state
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // Reset message and loading state
      this.message = "";
      this.loading = true;

      try {
        const { data, pending, error }: any = await useFetch(
          "https://auth.camgloble.com/wp-json/api/v1/login",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        );

        this.loading = pending;

        if (data.value) {
          const token = useCookie("token");
          token.value = data?.value?.data?.token;
          this.authenticated = true;
          this.message = "Login successful!";
        } else if (error.value) {
          this.message = error.value.data.message;
        }
      } catch (error) {
        this.message = "An error occurred during login."; // Set general error message
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated state value to false
      token.value = null; // clear the token cookie
      this.message = "Logged out successfully."; // Set logout message
    },
  },
});
