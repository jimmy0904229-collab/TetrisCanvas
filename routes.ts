import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve the Tetris game at root path
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  
  // Also serve at /tetris for alternate access
  app.get('/tetris', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  
  // Serve static files for Tetris (CSS and JS)
  app.get('/style.css', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'style.css'));
  });
  
  app.get('/script.js', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'script.js'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
