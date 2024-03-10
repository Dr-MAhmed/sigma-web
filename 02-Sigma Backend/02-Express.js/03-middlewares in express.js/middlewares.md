## Middlewares in Express.js

## 1: Application-level middleware
app.use((req, res, next) => {
console.log('This is application-level middleware');
next();
});

## 2: Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
console.log('This is router-level middleware');
next();
});
router.get('/', (req, res) => {
res.send('Hello from router');
});
app.use('/router', router)

## 3: Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

## 4: Built-in middleware
app.use(express.static('public')); // Serving static files from the 'public' directory

## 5: Third-party middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Parsing JSON request bodies
// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});