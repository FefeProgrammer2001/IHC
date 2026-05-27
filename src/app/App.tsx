import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "20px",
            padding: "20px",
          },
        }}
      />
    </>
  );
}