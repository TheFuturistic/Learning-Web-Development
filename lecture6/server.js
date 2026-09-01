const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const students=[
  { id: 1, name: 'John Doe', age: 20 },
  { id: 2, name: 'Jane Smith', age: 22 },
  { id: 3, name: 'Michael Johnson', age: 19 }
];
///read operations
app.get('/students/:rollNo', (req, res) => {
  const student = students.find(s => s.id === Number(req.params.rollNo));
  if (!student) {
    res.status(404).json({ success:false, message: 'Student not found' });
  }
  res.json({success:true, student});
});

//create

app.post('/students', (req, res) => {
  const data = req.body;
  console.log(data);
  students.push(data);  
  res.json({success:true, message: 'Student added successfully', student: data});

})

//update

app.put('/students/:rollNo', (req, res) => {
  const id = req.params.rollNo;
  const data = req.body;
  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  student.name = data.name;
  student.section = data.section;
  res.json({success:true, student});
});

//delete
app.delete('/students/:rollNo', (req, res) => {
  const id = req.params.rollNo;
  const index = students.findIndex((student) => student.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  students.splice(index, 1);
  res.json({success:true, message: 'Student deleted successfully'});
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
