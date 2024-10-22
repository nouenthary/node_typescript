mkdir my-express-app
cd my-express-app
npm init -y

npm install express
npm install --save-dev typescript @types/node @types/express ts-node nodemon


npx tsc --init

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

mkdir src
touch src/index.ts

import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


"scripts": {
  "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

npm run dev

npm run build

npm install dotenv
npm install --save-dev @types/dotenv


import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express and Environment Variables!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});