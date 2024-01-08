import  express  from "express";

const app = express();
const englishJokes = [
    {
      id: 1,
      title: "The Dizzy Bee",
      content: "Why did the bee get married? Because it found its honey!"
    },
    {
      id: 2,
      title: "Pizza Time",
      content: "What do you call a fake noodle? An impasta!"
    },
    {
      id: 3,
      title: "Time Flies",
      content: "I told my wife she should embrace her mistakes. She gave me a hug."
    },
    {
      id: 4,
      title: "Night Owls",
      content: "Why don't skeletons fight each other? They don't have the guts."
    },
    {
      id: 5,
      title: "The Music Lover",
      content: "What do you get when you play a country song backwards? You get your house, your truck, and your dog back."
    }
  ];
  
  const hindijokes = [
    {
      id: 1,
      title: "Patni-Pati ki Baatcheet",
      content: "Patni: Tumhari bahut adat hai jhoot bolne ki. Pati: Woh toh hai, par tumhare saath rehte hue maine unhe sudhaar diya hai."
    },
    {
      id: 2,
      title: "Baccha aur Teacher",
      content: "Teacher: Jab gadha bachhon ke beech baithaya jata hai, toh kya kehte ho? Baccha: Bachhon, yeh tumhara baap hai!"
    },
    {
      id: 3,
      title: "Shararti Baccha",
      content: "Teacher: Tum hamesha late kyun aate ho? Baccha: Ma'am, aapki acchi khabar sunne ke liye. Teacher: Woh kaisi khabar? Baccha: Aapne kabhi gandagi mein kutta nahi dekha hota!"
    },
    {
      id: 4,
      title: "Bacche ka Sawaal",
      content: "Baccha: Papa, achhi baaton ko sunne se man shaant ho jaata hai, toh buri baaton ko sunke kya hota hai? Papa: Teri maa ka doosra bachcha!"
    },
    {
      id: 5,
      title: "Pariksha mein Fail",
      content: "Pita: Tumhaari pariksha mein itna neeche number kyun aaya? Beta: Papa, maine khudaa ko bhi jawaab nahi diya tha, woh toh number dene wala kaun hota hai."
    },
    {
      id: 6,
      title: "Daadi ka Sawaal",
      content: "Daadi: Tum kyun shaadi nahi karte? Pota: Daadi, kabhi mujhse bhi poocha hai ki main kyun shaadi karu?"
    },
    {
      id: 7,
      title: "Santa aur Banta",
      content: "Santa: Banta, log bahut smart ho gaye hain. Banta: Kyun? Santa: Koi phoolon ka guldasta laata hai, toh koi guldaste mein phool rakhata hai."
    },
    {
      id: 8,
      title: "Bacche ki Samajhdaari",
      content: "Pita: Tum bahut samajhdaar ho, tumhaari soch badi hoti jaa rahi hai. Beta: Toh phir, aapki kaisi galti hai ki aap mujhe is duniya mein bhejte ho?"
    },
    {
      id: 9,
      title: "Mahila Doctor",
      content: "Ladka: Doctor, meri neend bahut kharab ho gayi hai. Doctor: Toh kya karo, goli kha lo. Ladka: Aapne bhi li thi? Doctor: Haan, par ab meri neend achhi hai."
    },
    {
      id: 10,
      title: "Bacche ki Jidd",
      content: "Maa: Beta, khana kha lo. Baccha: Nahin, main nahin khaunga."
    }
  ];
  

app.get('/',(req,res)=>{
    res.send('<h1>Server is ready to serve Jokes</h1>');
});

app.get('/api/englishjokes',(req,res)=>{
    res.json(englishJokes)
})

app.get('/api/hindijokes',(req,res)=>{
    res.json(hindijokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})