// const express = require("express");
// const path = require("path");
// const app = express();

// app.use(express.static(path.join(__dirname,"public")));

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index.html"));
// });

// const PORT = 3000;
// app.listen(PORT,"0.0.0",()=>{
//     console.log(`Open http:// 192.168.32.227:${PORT}`);
// });

// const express = require("express");
//  const path = require("path");
//  const app = express();
//  // Serve static les (HTML, CSS, JS) from "public" folder
//  app.use(express.static(path.join(__dirname)));
//  // Default route (when visiting "/")
//  app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "index.html"));
//  });
//  // Sta server on al network inte aces
//  const PORT = 3000;
//  app.listen(PORT, "0.0.0.0", () => {
//  console.log(`
//  ✅
//  Server running at:`);
//  console.log(`   Local:   h p://localhost:${PORT}`);
//  console.log(`   Network: h p://${getLocalIp()}:${PORT}`);
//  });
//  // Helper function to get local IP address
//  function getLocalIp() {
//  const { networkInterfaces } = require("os");
//  const nets = networkInterfaces();
//  for (const name of Object.keys(nets)) {
//  for (const net of nets[name]) {
//  if (net.family === "IPv4" && !net.internal) {
//  return net.address;
//  }
//  }
// }
//  return "0.0.0.0";
//  }