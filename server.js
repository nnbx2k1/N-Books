// import dotenv from 'dotenv';

import { app } from './app.js'
import { initDatabase } from './db/init.js';
import path from 'path';

const PORT = 3000;




try {
    await initDatabase();
    const PORT = 3000;
    app.listen(PORT, () => {
      console.info(`Express server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error connecting to database:', err);
  }