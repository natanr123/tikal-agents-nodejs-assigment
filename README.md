A mission must be created with an agent meaning that the agent must be created before the mission

**Performance Considerations** 

In order to increase performance for countries-by-isolation
I am increase the mission count for an agent each I time a mission is created.
For simplicity I do not decrease the mission count on mission delete (or update mission) but it should work the same way

It is also possible to create a counties table and track the number of isolated agents but I have preferred to use join

Cheat sheet for sequelize for later use:
```
    "./node_modules/.bin/sequelize" init
    "./node_modules/.bin/sequelize" model:generate --name mission --attributes agent_code:string,country:string,address:string,mission_date:date
    "./node_modules/.bin/sequelize" model:generate --name agent --attributes code:string,missions_count:integer
    "./node_modules/.bin/sequelize" seed:generate --name agents
    "./node_modules/.bin/sequelize" seed:generate --name missions
    "./node_modules/.bin/sequelize" db:migrate
    "./node_modules/.bin/sequelize" db:seed:all
```

