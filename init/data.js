const sampleListings = [
  {
    title: "Mumbai Indians Official Jersey",
    description: 
      "Show your support for the Mumbai Indians with this official team jersey. Made with high-quality fabric for ultimate comfort and style.",
    image: "https://imgecart.com/wp-content/uploads/2024/03/Mumbai-Indians-Jersey-Design-2024.jpg",
    price: 79.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Chennai Super Kings Cap",
    description: 
      "Stay cool in the sun while cheering for the Chennai Super Kings with this stylish cap featuring the team logo.",
    image: "https://playr.in/cdn/shop/files/PRCSK24-MC-01_1.jpg?v=1711545000&width=1800",
    price: 24.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Royal Challengers Bangalore Keychain",
    description: 
      "Carry the spirit of RCB with you wherever you go with this premium quality keychain featuring the iconic team crest.",
    image: "https://scontent.fbho1-4.fna.fbcdn.net/v/t1.6435-9/120236022_1446209262243917_3458158112041665173_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=rZV72KxwFCcQ7kNvgEctkww&_nc_zt=23&_nc_ht=scontent.fbho1-4.fna&_nc_gid=ANthlA6gBVjcgeaQcdP5kcj&oh=00_AYCM7Y7f_z9dPcO15WZnSwkdHSstMl_yGZhxwofHKUHYRw&oe=67757D5F",
    price: 9.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Kolkata Knight Riders Mug",
    description: 
      "Start your day with a sip of coffee in this Kolkata Knight Riders ceramic mug, perfect for all fans of KKR.",
    image: "https://images.fancode.com/media/catalog/product/k/o/kolkata_knight_riders_purple_and_yellow_printed_jeetbo_re_ceramic_glossy_coffee_mug_325_ml_-_pack_of_1(4).jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3Qvay9vL2tvbGthdGFfa25pZ2h0X3JpZGVyc19wdXJwbGVfYW5kX3llbGxvd19wcmludGVkX2plZXRib19yZV9jZXJhbWljX2dsb3NzeV9jb2ZmZWVfbXVnXzMyNV9tbF8tX3BhY2tfb2ZfMSg0KS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJiYWNrZ3JvdW5kIjoidHJhbnNwYXJlbnQiLCJ3aWR0aCI6MzYwLCJoZWlnaHQiOjQ4MH0sIndlYnAiOnsicXVhbGl0eSI6NjAsImxvc3NsZXNzIjpmYWxzZX19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0=",
    price: 14.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Delhi Capitals Poster",
    description: 
      "Decorate your room with this high-quality Delhi Capitals poster, featuring your favorite players in action.",
    image: "https://images.fancode.com/media/catalog/product/p/o/posters1dcnayidilli_e0d1lbafcfdarxdh.jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvcC9vL3Bvc3RlcnMxZGNuYXlpZGlsbGlfZTBkMWxiYWZjZmRhcnhkaC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJiYWNrZ3JvdW5kIjoidHJhbnNwYXJlbnQiLCJ3aWR0aCI6MzYwLCJoZWlnaHQiOjQ4MH0sIndlYnAiOnsicXVhbGl0eSI6NjAsImxvc3NsZXNzIjpmYWxzZX19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0=",
    price: 19.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Punjab Kings Wristband",
    description: 
      "Show your team spirit with this stylish and durable wristband from the Punjab Kings fan collection.",
    image: "https://m.media-amazon.com/images/I/51RIEBeAytL._SX679_.jpg",
    price: 4.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Rajasthan Royals Backpack",
    description: 
      "Carry your essentials in style with this premium Rajasthan Royals backpack, designed for both comfort and durability.",
    image: "https://images.fancode.com/media/catalog/product/p/r/prlbp-rr-01_laptop_backpack_1.jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvcC9yL3BybGJwLXJyLTAxX2xhcHRvcF9iYWNrcGFja18xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudCIsIndpZHRoIjozNjAsImhlaWdodCI6NDgwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
    price: 49.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Sunrisers Hyderabad Phone Case",
    description: 
      "Protect your phone in style with this Sunrisers Hyderabad phone case, compatible with multiple models.",
    image: "https://coveritup.com/cdn/shop/files/Layer21_d9412b2d-a4d3-4a46-85a7-dafafd81d45d.png?v=1696942927&width=800",
    price: 19.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Lucknow Super Giants Scarf",
    description: 
      "Keep yourself warm and support the Lucknow Super Giants with this high-quality team scarf.",
    image: "https://ih1.redbubble.net/image.5043703957.1222/scarf,x630-pad,600x600,f8f8f8.jpg",
    price: 29.99,
    location: "Worldwide",
    country: "India",
  },
  {
    title: "Gujarat Titans Water Bottle",
    description: 
      "Stay hydrated while supporting the Gujarat Titans with this stainless steel water bottle featuring the team logo.",
    image: "https://images.fancode.com/media/catalog/product/g/u/gujarat_titans_white_and_navy_blue_printed_single_walled_stainless_steel_bottle_-_750_ml(1).jpg?hash=eyJrZXkiOiJtZWRpYS9jYXRhbG9nL3Byb2R1Y3QvZy91L2d1amFyYXRfdGl0YW5zX3doaXRlX2FuZF9uYXZ5X2JsdWVfcHJpbnRlZF9zaW5nbGVfd2FsbGVkX3N0YWlubGVzc19zdGVlbF9ib3R0bGVfLV83NTBfbWwoMSkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6InRyYW5zcGFyZW50Iiwid2lkdGgiOjM2MCwiaGVpZ2h0Ijo0ODB9LCJ3ZWJwIjp7InF1YWxpdHkiOjYwLCJsb3NzbGVzcyI6ZmFsc2V9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9",
    price: 14.99,
    location: "Worldwide",
    country: "India",
  },
];

module.exports = { data: sampleListings };
