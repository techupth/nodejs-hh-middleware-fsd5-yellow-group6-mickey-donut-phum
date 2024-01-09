import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`;
    await fs.writeFile("data/log.txt", text, { flag: "a" });
  } catch {
    await fs.writeFile("data/log.txt", `Logging error on ${text}`);
  }
  next();
}
export default logging;
