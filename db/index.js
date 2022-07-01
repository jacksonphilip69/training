const express = require("express");
// const res = require("express/lib/response");

const mongoose = require("mongoose");
const model = require("./schema");
const app = express();
const PORT = 5000;
app.use(express.json());

let dburl =
  "mongodb+srv://jackson:coccoccoc@cluster0.xbnyezl.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then((res) => console.log("server connected with db"))
  .catch((res) => console.log("server connected with db"));

app.get("/", async (req, res) => {
  try {
    const result = await model.find();
    res.json({
      message: "data found",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log(`server running sucessfully in PORT ${PORT}`);
});

app.post("/", async (req, res) => {
  try {
    const result = await model.insertMany(req.body);
    res.json({ message: "Data inserted", data: result });
  } catch (error) {
    console.log(error);
  }
});
app.get("/search/:name", async (req, res) => {
  try {
    const result = await model.findOne({ name: req.params.name });
    res.json({ message: "Data found", data: result });
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:name", async (req, res) => {
  try {
    const result = await model.findOne({ name: req.params.name });
    if (result) {
      let result = await model.updateOne(
        { name: req.params.name },
        { $set: { name: req.body.name } }
      );

      res.json({
        message: "Data found",
        data: result,
      });
    } else {
      res.json({
        message: "Data not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
app.delete("/delete/:name", async (req, res) => {
  try {
    const result = await model.findOne({ name: req.params.name });
    if (result) {
      let result = await model.deleteOne(
        { name: req.params.name },
        { $set: { name: req.body.name } }
      );

      res.json({
        message: "Data found",
        data: result,
      });
    } else {
      res.json({
        message: "Data not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// app.get("/", async (req, res) => {
//   const client = await MongoClient.connect(dburl);
//   try {
//     let db = client.db("day1");
//     let user = await db.collection("register").find().toArray();
//     res.json({
//       message: "Displaying all records",
//       result: user,
//     });
//   } catch (error) {
//     console.log(error);
//     n;
//   } finally {
//     client.close;
//   }
// });

// app.post("/", async (req, res) => {
//   const client = await MongoClient.connect(dburl);
//   try {
//     let db = client.db("day1");
//     let user = await db.collection("register").insertMany(req.body);
//     res.json({
//       message: "Data inserted",
//       result: user,
//     });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close;
//   }
// });

// app.get("/search/:name", async (req, res) => {
//   const client = await MongoClient.connect(dburl);
//   try {
//     let db = client.db("day1");
//     let user = await db.collection("register").findOne(req.body.name);
//     res.json({
//       message: "Displaing all records",
//       result: user,
//     });
//   } catch (error) {
//     console.log(error);
//     n;
//   } finally {
//     client.close;
//   }
// });
// app.put("/update/:name", async (req, res) => {
//   const client = await MongoClient.connect(dburl);
//   try {
//     let db = client.db("day1");
//     let user = await db.collection("register").findOne({ name: req.params.name });
//     if (user) {
//       let user = await db
//         .collection("register")
//         .updateOne(
//           { name: req.params.name },
//           { $set: { name: req.body.name } }
//         );
//       res.json({
//         message: "Data found",
//         result: user,
//       });
//     } else {
//       res.json({
//         message: "data not found",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close;
//   }
// });

// app.delete("/delete/:name", async (req, res) => {
//     const client = await MongoClient.connect(dburl);
//     try {
//       let db = client.db("day1");
//       let user = await db.collection("register").findOne({ name: req.params.name });
//       if (user) {
//         let user = await db
//           .collection("register")
//           .deleteOne(
//             { name: req.params.name },
//             { $set: { name: req.body.name } }
//           );
//         res.json({
//           message: "Data found",
//           result: user,
//         });
//       } else {
//         res.json({
//           message: "data not found",
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       client.close;
//     }
//   });

// app.listen(PORT, () => {
//   console.log(`server running successfully in PORT ${PORT}`);
// });
