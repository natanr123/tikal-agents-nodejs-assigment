cheat sheet for later use
```
    "./node_modules/.bin/sequelize" init
    "./node_modules/.bin/sequelize" model:generate --name agent --attributes code:string,country:string,address:string,mission_date:date
    "./node_modules/.bin/sequelize" db:migrate
    "./node_modules/.bin/sequelize" seed:generate --name tikal-agents
    "./node_modules/.bin/sequelize" db:seed:all
```