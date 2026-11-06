use("GoogleDB")

// db.employee.insert([
//     {
//         empId: 104,
//         Name: "Rishabh",
//         salary: 850000,
//         department: "IT",
//         contact: 924434532,
//         age: 25
//     },
//     {
//         empId: 106,
//         Name: "Durganand",
//         salary: 950000,
//         department: "Finance",
//         contact: 920034532,
//         age: 23
//     },
//     {
//         empId: 107,
//         Name: "Khusboo",
//         salary: 750000,
//         department: "Sales",
//         contact: 824434532,
//         age: 24
//     },{
//         empId: 108,
//         Name: "Rani",
//         salary: 800000,
//         department: "Finance",
//         contact: 904434532,
//         age: 26
//     }
// ])

// db.employee.updateMany(
//     {},
//     {
//         $set:{
//             location:"Gurugram"
//         }
//     }
    
// )

// db.employee.aggregate(
//     [
//         {
//             $match: {department: "Finance"}
//         }
//         ,{
//             $project: {
//                 Name: 1,
//                 salary: 1,
//                 contact: 1,
//                 location: 1,
//                 _id:0
//             }
//         }
//         ,{
//             $group:{
//                 _id: "$location",
//                 totalSalary: {$sum: "$salary"},
//                 avgSalary: {$avg: "$salary"},
//                 maxSalary: {$max: "$salary"},
//                 minSalary: {$min: "$salary"},
//                 totalEmployee: {$sum: 1}
//             }
//         }
//         ,{
//             $sort: {totalSalary: -1}
//         }
//         // ,{
//         //     $limit:1
//         // }

//         ,{
//             $count:"totalSalary"
//         }
//     ]
// )


// db.employee.getIndexes()

// db.employee.find({_id: ObjectId('6adb1daa5c027457457545f4')})
// db.employee.find({contact: 824434532})

// db.employee.createIndex({contact:1})

// db.employee.getIndexes()
