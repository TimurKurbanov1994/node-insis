const Application = require('./server/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./server/parseJson');
const parseUrl = require('./server/parseUrl');
const {Pool} = require('pg')
const pool = new Pool()

const app = new Application()
const PORT = 4000;
app.use(jsonParser);
app.use(parseUrl(`http://localhost:${PORT}`));

app.addRouter(userRouter);


const start = async () => {
    try {
       await pool.on('connect', () => {
            console.log('connected to the Postgress Database');
        })
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
