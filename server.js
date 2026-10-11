
const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.status(200).send("Servidor PeerJS da câmera está funcionando.");
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: "/",
  allow_discovery: false,
  proxied: true
});

app.use("/peerjs", peerServer);
