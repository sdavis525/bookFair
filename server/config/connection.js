const mongoose = require('mongoose');


const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/googlebooks';


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/googlebooks', {
 
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});