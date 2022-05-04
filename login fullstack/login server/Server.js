const express = require("express");
const session = require("express-session");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrayegy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const { home } = require("nodemon/lib/utils");
const app = express();
const port = 8000;

//connection to database
mongoose.connect(
  "mongodb+srv://vicky:vicky123@cluster0.o1i4r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", UserSchema);

//middle ware

app.engine("hbs", hbs.engine({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "verySecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//passport.js
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  user.findById(id, function (err, done) {
    done(err, user);
  });
});

passport.use(
  new localStrayegy(function (username, password, done) {
    user.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "incorrect username" });
      }
      bcrypt.compare(password, user.password, function (err, res) {
        if (err) {
          return done(err);
        }
        if (res === false)
          return done(null, false, { message: "incorrect password" });
        return done(null, user);
      });
    });
  })
);

function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}


function isLoggedOut(req, res, next) {
    if (!req.isAuthenticated()) return next();
    res.redirect("/");
  }

  
app.get("/", isLoggedin,(req,res)=>{
    res.render("index", { title: "home" });
})

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/login", isLoggedOut, (req, res) => {
  res.render("login", { title: "login" });
});

app.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:"/login?error=true"
}))


app.get ('/logout', function(req, res){
    req.logout();
res.redirect('/')
})
//setup our admin user
app.get("/setup", async (res, req) => {
  const exists = await user.exists({ username: "admin" });

  if (exists) {
    res.redirect("/login");
    return;
  }
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash("pass", salt, function (err, hash) {
      if (err) return next(err);
      const newAdmin = new user({
        username: "admin",
        password: hash,
      });
      newAdmin.save();
    //   res.redirect("/login");
    });
   

  });
});

app.listen(port, function () {
  console.log("running 8000");
});
