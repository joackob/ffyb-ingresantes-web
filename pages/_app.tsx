import "../styles/globals.css";
import { AppProps } from "next/app";
import App from "@/src/app";

export default function MyApp(props: AppProps) {
  return <App {...props} />;
}
