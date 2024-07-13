export const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? "http://localhost:3500/api/v1"
    : "https://kaarthi-todo-list-bn.vercel.app/api/v1/";
