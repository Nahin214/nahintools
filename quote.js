const words = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon",
"Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
"When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
"Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller",
"It is during our darkest moments that we must focus to see the light. -Aristotle"];
const randomindex = Math.floor(Math.random()*words.length); 
console.log(randomindex);
const quote = document.querySelector(".quote")
quote.textContent = `${words[randomindex]}`

const red = document.querySelector(".red1")
const blue = document.querySelector(".blue1")
const green = document.querySelector(".green1")
const violet = document.querySelector(".violet1")

red.addEventListener("click",function(){
    quote.classList.add("red");
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

blue.addEventListener("click",function(){
    quote.classList.add("blue");
    quote.classList.remove("red");
    quote.classList.remove("green");
    quote.classList.remove("violet");

});

green.addEventListener("click",function(){
    quote.classList.add("green");
    quote.classList.remove("blue");
    quote.classList.remove("red");
    quote.classList.remove("violet");

});

violet.addEventListener("click",function(){
    quote.classList.remove("blue");
    quote.classList.remove("green");
    quote.classList.remove("red");
    quote.classList.add("violet");
});




