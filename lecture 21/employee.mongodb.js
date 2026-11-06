use("GoogleDB")


///Create operation  1. insert   2. insertOne  3. insertMany
// db.employee.insert(
//     {
//         empId: 102,
//         Name: "Suresh",
//         salary: 650000,
//         department: "HR",
//         contact: 9274434532,
//         age: 25
//     }
// )

// db.employee.insertOne(
//     {
//         empId: 103,
//         Name: "Ritu",
//         salary: 790000,
//         department: "IT",
//         contact: 9274634533,
//         age: 20
//     }
// )

// db.employee.insertMany(
//     [
//         {
//             empId: 104,
//             Name: "Reena",
//             salary: 750000,
//             department: "IT",
//             contact: 92741224533,
//             age: 28
//         },
//         {
//             empId: 105,
//             Name: "Rohit",
//             salary: 850000,
//             department: "Finance",
//             contact: 92744334534,
//             age: 30
//         }
//     ]
// )


/////read operation  1. find()  2. findOne()

// db.employee.find()
// db.employee.findOne()

// db.employee.find({department: "IT"})
// db.employee.findOne({department: "IT"})


///Update operation  1. updateOne()  2. updateMany()

// db.employee.updateOne(
//     {_id: ObjectId('6ad9baf78d1f980f306eab39')},
//     {
//         $set:{
//             age:25,
//             salary: 800000
//         }
//     }
// )

// db.employee.updateMany(
//     {department: "Finance"},
//     {
//         $set:{
//             salary: 950000
//         }
//     }
// )


////delete operation  1. deleteOne()  2. deleteMany()

// db.employee.deleteOne({_id: ObjectId('6ad9bf74d4287b7563aa953c')})


// db.employee.find(
//     {
//         age:{
//             $gte:25
//         }
//     }
// )

// db.employee.find(
//     {
//         department:{
//             $eq:"IT"
//         }
//     }
// )


///AND

// db.employee.find(
//     {department:"Finance",age:{$gt:25}}
// )



///OR

// db.employee.find(
//     {
//         $or:[
//             {department:"Finance"},
//             {age:{$gt:25}}
//         ]
//     }
// )

// db.employee.find({department:"Finance"},{Name:1,department:1,salary:1,_id:0})

// db.employee.find().skip(2).limit(2)
// db.employee.find().sort({empId:-1})