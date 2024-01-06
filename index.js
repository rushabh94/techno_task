const { app } = require("./src/app.js");

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
