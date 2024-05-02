function showFact() {
  // Array of Syrian history fun facts
var facts = [
  "Syria is home to six UNESCO World Heritage sites, including the ancient cities of Aleppo, Damascus, and Palmyra.",
  "Damascus, the capital of Syria, is one of the oldest continuously inhabited cities in the world.",
  "The Umayyad Mosque in Damascus was completed in 715 and is one of the largest and oldest mosques in the world.",
  "Aleppo was historically a major end point for the Silk Road which connected the east and west for centuries.",
  "Syria was once part of the ancient Fertile Crescent, which is often called the cradle of civilization.",
  "During the Middle Ages, Syria was a center of learning and scholarship, especially in the sciences and philosophy.",
  "The traditional craft of inlaying wood with mother-of-pearl is a Syrian art that dates back to the 15th century.",
  "Syrian cuisine is known for its diverse dishes that use a variety of spices and ingredients, including kibbeh, Syria's national dish.",
  "Syria has a rich musical heritage that includes the noted poet and composer, Nizar Qabbani.",
  "The city of Palmyra, once a wealthy and thriving city of the Roman Empire, contains some of the most spectacular ruins in the Middle East.",
  "Syrian soap, made primarily from olive and laurel oils, has been made in Aleppo for thousands of years."
];


  // Generate a random number between 0 and the length of the facts array
  var randomIndex = Math.floor(Math.random() * facts.length);

  // Display a random fact
  alert(facts[randomIndex]);
}




  