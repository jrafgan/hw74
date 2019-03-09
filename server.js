const products = require('./app/products');
const db = require('./differentExamples/fileDb');
const app = express();
app.use(express.json());
const port = 8002 ;

db.init();

app.use('/products', products);

app.listen(port, ()=>{
    console.log(`Server started on ${port} port!`);
});