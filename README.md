cheat sheet for later use
```
    "./node_modules/.bin/sequelize" init
    "./node_modules/.bin/sequelize" model:generate --name mission --attributes agent:string,country:string,address:string,mission_date:date
    "./node_modules/.bin/sequelize" db:migrate
    "./node_modules/.bin/sequelize" seed:generate --name tikal-missions
    "./node_modules/.bin/sequelize" db:seed:all
```