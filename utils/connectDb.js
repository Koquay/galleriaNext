const mongoose = require("mongoose");

const connection = { isConnected: false };

module.exports = async () => {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_SRV, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log("*** CONNECTED TO MONGO ***");
    connection.isConnected = true;
  } catch (error) {
    console.log("*** CONNECT TO MONGO FAILED ***");
    throw error;
  }
};

// export function connectDb;
