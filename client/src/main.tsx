import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import heroImage from "@/assets/hero/outdoor_kitchen.webp";
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = heroImage;
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);

createRoot(document.getElementById("root")!).render(<App />);
