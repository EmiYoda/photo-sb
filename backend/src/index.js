import app from "./app";
import "./database";

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`));
