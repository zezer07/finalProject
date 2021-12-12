const express = require('express');
const userloginRouter = require('./routers/usersloginRouter');
const userRouter= require('./routers/usersRouter')
const moviesRouter = require('./routers/moviesRouter')
const membersRouter = require('./routers/membersRouter')
const app = express();
const cors = require('cors');

//configs

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

require('./config/database')

app.use('/api/login', userloginRouter);
app.use('/api/users',userRouter)
app.use('/api/movies',moviesRouter)
app.use('/api/members',membersRouter)

app.listen(8000);