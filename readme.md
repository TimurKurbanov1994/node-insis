# Rest API

Build a CRUD Rest API

Create a Express server that handles:

- A `GET` request endpoint at `/tasks` to get all tasks in DB. <!-- NOT finish -->
- A `POST` request endpoint at `/tasks` to add new task to DB. <!-- NOT finish -->
- A `PUT` request endpoint at `/tasks/:id` to update task from DB upon their name. <!-- NOT finish -->
- A `PATCH` request endpoint at `/tasks/:id` to update some task data from DB upon their name. <!-- NOT finish -->
- A `DELETE` request endpoint at `/tasks/:id` to delete some task data from DB upon their name. <!-- NOT finish -->

New task endpoint should be able to accept a JSON object like the following:

```json
 {
  "name": "Create model",
  "priority": "low",
  "description": "string",
  "data": "1-1-2018",
  "id": "df424242424g"
}
```

Start app `npm dev`
