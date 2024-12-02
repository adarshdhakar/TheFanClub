if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const MongoStore = require('connect-mongo');

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const homeRouter = require("./routes/home.js");
const cartRouter = require("./routes/cart.js");
const auctionRouter = require("./routes/auction.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/saas";

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

main();

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,

  },
};

app.use(session(sessionOptions));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//Root Route
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    console.log(req.user);
    res.locals.currUser = req.user;
    // console.log(res);
    next();
})

app.get("/demouser", async(req, res) => {
    let fakeUser = new User({
        email: "student@gmail.com",
        username: "delta-student",
    });

    let registeredUser = await User.register(fakeUser, "helloworld");
    res.send(registeredUser);
});

app.use("/home", homeRouter);
app.use("/listings", listingsRouter);
app.use("/listings/:id/review", reviewsRouter);
app.use("/cart", cartRouter);
app.use('/auction', auctionRouter);
app.get('/checkout/:listingId', async(req, res) => {
  const listingId = req.params.listingId;
  const listing = await Listing.findById(listingId).populate("owner");
  const user = await User.findById(listing.owner._id);
  const acceptedQuote = req.query.acceptedQuote || null;
  res.render('checkout', { listing, user, acceptedQuote });
});
app.post('/purchase', async(req, res) => {
  req.flash("success", "Payment successful!");
  res.redirect("/listings");
});

app.use("/", userRouter);

//Test Route
app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send(sampleListing);
});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode=500, message="Something went wrong!" } = err;
    // res.render("listings/error.ejs", {err});
    res.status(statusCode).render("listings/error.ejs", {err});
    // res.status(statusCode).send(message);
    // res.send("something went wrong!");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});