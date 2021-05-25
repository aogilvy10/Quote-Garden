# Quote Garden - React Based web app
 
Quote garden was my second overall project for the Software Engineering Immersive Course at General Assembly, but the first coding with another person. We were only given 48 hours to complete the project. My partner, Jahnvi, and I agreed on using a Random Quote API where we were able to gather thousands of quotes and have a random quote pop up after a certain amount of time. We then added a random picture API that did the exact same thing but changed the background everytime the quote did.
 
## Deployed Version
https://masterofgardenquotes.netlify.app/
 
![image](https://user-images.githubusercontent.com/68297258/117756266-b867f000-b1d2-11eb-9b21-8a2c8baccafd.png)
 
## Code Installation
- Clone or download repo
- Install Yarn in terminal with command `yarn`
- Start server in terminal with `yarn start`
 
## Brief
 
48 hour ‘React-a-thon’ building a front-end app making use of a public API
 
## Technologies Used:
 
- React Hooks
- HTML5
- CSS3
- JavaScript(ES6)
- Git
- GitHub
- Axios
- VS Code
- Eslint
- Insomnia
- Google Fonts
 
## Approach Taken
 
With not much time given, we started our planning in a simple file within our VS Code. We bullet pointed out how we wanted our layout to look, how we would approach gathering all of our information, and what information will be displayed.
 
We began the project coding together through the use of live share then split up the work evenly throughout. First we started with the setup of our React app and tested the API endpoints on insomnia. After gathering our data pretty quickly we decided to set up our home page along with the quote page.
 
 
 
## Using the Data
 
### Home Page
The home page and quote page was where most of my focus was put throughout this project. Our Home page is where a random quote and background image will be displayed after a certain amount of time. Using axios we made a GET request to our API endpoints that were all stored within an array, choosing one of those endpoints at random. Each endpoint within the array is an endpoint to a different category of genres giving us a wide variety.
 
```javascript
const urlArray = ['https://quote-garden.herokuapp.com/api/v3/quotes?genre=motivational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=happiness&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=time&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=inspirational&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=success&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=power&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=science&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=patience&limit=100', 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=friendship&limit=100']
 
 const randomArray = urlArray[Math.floor(Math.random() * urlArray.length)]
 
 const getQuote = () => {
   const getRandomQuote = async () => {
     const { data } = await axios.get(randomArray)
     const randomNumber = Math.floor(Math.random() * data.data.length)
     setQuotes(data.data[randomNumber])
   }
   getRandomQuote()
 }
 
 useEffect(() => {
   getQuote()
   setInterval(() => {
     getQuote()
   }, 20000)
 }, [])
 ```
 
### Quote Page
 
After you have had a full supply of randomly generated quotes, you can then search quotes by genre using our navbar. This is where I learnt the true benefits of React. Each endpoint from our API was very similar and I was able to use useParams to change the endpoint based on what genre the user clicked on. This then changed our endpoint and displayed the genre's quotes.
 
![image](https://user-images.githubusercontent.com/68297258/117756520-27454900-b1d3-11eb-9520-795ff60a3c55.png)
 
```javascript
const [quotes, setQuotes] = useState(null)
 const { genre } = useParams()
 console.log(useParams())
 
 useEffect(() => {
   const getData = async () => {
     const { data } = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?genre=${genre}&limit=15&page=1`)
     setQuotes(data.data)
     console.log('HERE: ', data)
   }
   getData()
 }, [])
 ```
 
## Bugs and Blockers 
Our first and major blocker that we faced was coming up with an idea and finding an API to use. Many API's we found depended on getting permission and we only had two days to complete it. From there, my partner and I both agreed to keep it simple and clean. We did not come across many bugs but one aspect we would like to add is repsonsiveness. 
 
## Wins
 
Although this may not be my most functional project, this was a great opportunity for learning. Having only just been taught React and first time pair coding, I was very happy with our outcome. Learning a lot more about API's and how to manipulate them was very helpful as well. Overall a very good experience for my partner and I.
 
![image](https://user-images.githubusercontent.com/68297258/117756927-ea2d8680-b1d3-11eb-93c5-d28f84d4c27b.png)
 
## Future Learning
 
One part I would go back and fix however would be the responsiveness of our website. Without being taught too much CSS I feel as though this is where we could have done a bit more, but there is always more time for learning style!
