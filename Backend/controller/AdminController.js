const storage=multer.diskStorage({
    destination:'./image/',
    filename: (req,file,cb)=>{
      console.log("kiyanna"+filename);
      return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
  
  })
  console.log("ishan"+storage);
  const upload=multer({
    storage:storage
    
  })