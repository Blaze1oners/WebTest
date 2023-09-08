const express = require("express");
const app = express();
const path = require("path");
const MethodOverride = require("method-override");
const { v4 : uuid} = require('uuid');

app.use(express.static("public"))
app.use(MethodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())



let Title;



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/",(req,res)=>{
  // res.send("Home")
  // res.send("Home")
  Title= "Home";
  res.render(`${Title}`,{Title:Title});
  // res.redirect("/");
})


app.get("/AboutMe",(req,res)=>{
  // res.send("Home")
  Title="AboutMe";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
  // res.redirect("/AboutMe");

})


app.get("/Find",(req,res)=>{
  Title= "NavForm";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})


app.get("/Projects/Missile",(req,res)=>{
  Title="ProjectMissile";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Ocean",(req,res)=>{
  Title="ProjectOcean";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Lightning",(req,res)=>{
  Title="ProjectLightning";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/ChainLightning",(req,res)=>{
  Title="ProjectLightning";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Heal",(req,res)=>{
  Title="ProjectHeal";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/River",(req,res)=>{
  Title="ProjectRiver";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/BloodRiver",(req,res)=>{
  Title="ProjectBloodRiver";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Shadow",(req,res)=>{
  Title="ProjectShadow";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Sky",(req,res)=>{
  Title="ProjectSky";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})

app.get("/Projects/Tornado",(req,res)=>{
  Title="ProjectTornado";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);
})
app.get("/Projects/Template",(req,res)=>{

  Title="ProjectTemplate";
  res.render(`${Title}`,{Title:Title});
  res.redirect(`${Title}`);

})
app.listen(3000, ()=>{
  console.log("Listening Port 3000")
})

// app.locals =
//     {
//       site: {
//         Link: "https://mail.google.com/mail/u/0/?fs=1&to=bencampbell0702@gmail.com&su=SUBJECT&body=BODY&tf=cm"
//       }
//     }

// app.locals.site.Link

app.get("*",(req,res)=>{
  res.send("Link Does not Exist")
})

