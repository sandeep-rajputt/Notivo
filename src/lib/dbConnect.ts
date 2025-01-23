import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/notivo";

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable.");
}

type MongooseCatched = {
  conn?: mongoose.Connection | null;
  promise?: Promise<mongoose.Connection> | null;
};

const cached: MongooseCatched = {
  conn: null,
  promise: null,
};

async function dbConnect(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
