const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose')
let hotelsdata = require('./hotels-data1')
let touristsdata = require('./tourist-spots1')
let dest = "", src = "";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/TravelPlanner')


const HotelSchema = mongoose.Schema({
   HotelName: String,
   city: String,
   PersonName: String,
   numberOfperson: Number,
   DateOfBookingTo: Date,
   DateOfBookingFrom: Date,
   price: Number
})

const transportationSchema = mongoose.Schema({
   type: String,
   PersonName: String,
   DateOfBooking: Date,
   Source: String,
   Destination: String,
   numberOfperson: Number,
   Price: Number
})

const Hotel = new mongoose.model("Hotel", HotelSchema)

app.get("/", (req, res) => {
   res.render('home')
})

app.get('/hotels', (req, res) => {
   console.log(hotelsdata);
   res.render('hotels', { hotels: hotelsdata })
})

app.post("/", (req, res) => {
   console.log(req.body);
   src = req.body.source;
   dest = req.body.destination;
   let reqHotelData = hotelsdata.filter(hotel => { return hotel.location.toLowerCase() === dest })
   hotelsdata = reqHotelData;
   res.redirect('/hotels')

})

app.get('/touristspots', (req, res) => {
   res.render('touristspots', { spots: touristsdata })
})

app.get('/travel-booking', (req, res) => {
   res.render('travelbooking');
})

app.post('/travel-booking', (req, res) => {
   console.log(req.body.numberOfPerson);
   let data = {
      ...req.body,
      source: src.toLocaleUpperCase(),
      destination: dest.toLocaleUpperCase(),
      price: Number(req.body.numberOfPerson) * 500
   };
   console.log(data);
   if (data.source === '' || data.destination === '') {
      res.send('<script>alert("Source / Destination cannot be Null!")</script>')
   }

   res.render('confirm-rental-booking', { modeData: data })
})

app.get('/contact', (req, res) => {
   res.render('contact');
})

app.listen(3000, () => {
   console.log("server started on port 3000");
})

