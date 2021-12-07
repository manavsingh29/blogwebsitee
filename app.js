const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs');

const homeStartingContent = " This is the home data  and i have declared it in the  const data tyoe  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto adipisci similique quo reprehenderit? Ut voluptates blanditiis dicta ad a adipisci voluptas temporibus, qui sint debitis nesciunt sunt numquam. Molestias distinctio mollitia quia. Laudantium dolores eos impedit corrupti cumque facere, omnis, odit fugiat blanditiis magnam, amet ab aspernatur quibusdam dicta architecto  dignissimos sit. Numquam ipsum officia sint provident, ex illum corporis quod ipsam consequuntur consequatur cum eligendi harum possimus!  ";
const aboutStartingContent = " This is the about data  and i have declared it in the  const data tyoe  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto adipisci similique quo reprehenderit? Ut voluptates blanditiis dicta ad a adipisci voluptas temporibus, qui sint debitis nesciunt sunt numquam. Molestias distinctio mollitia quia. Laudantium dolores eos impedit corrupti cumque facere, omnis, odit fugiat blanditiis magnam, amet ab aspernatur quibusdam dicta architecto  dignissimos sit. Numquam ipsum officia sint provident, ex illum corporis quod ipsam consequuntur consequatur cum eligendi harum possimus!  ";
const contactStartingContent = " This is the contact data  and i have declared it in the  const data tyoe  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto adipisci similique quo reprehenderit? Ut voluptates blanditiis dicta ad a adipisci voluptas temporibus, qui sint debitis nesciunt sunt numquam. Molestias distinctio mollitia quia. Laudantium dolores eos impedit corrupti cumque facere, omnis, odit fugiat blanditiis magnam, amet ab aspernatur quibusdam dicta architecto  dignissimos sit. Numquam ipsum officia sint provident, ex illum corporis quod ipsam consequuntur consequatur cum eligendi harum possimus!  ";

const app = express();
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
 
let posts = [ ];


app.get('/', (req, res) => {

    res.render('home', { homedata: homeStartingContent ,
                         posts: posts })  

})

app.get('/about', (req, res) => {
    res.render('about', { aboutdata: aboutStartingContent })
})
app.get('/contact', (req, res) => {
    res.render('contact', { contactdata: contactStartingContent })
})
app.get('/compose', (req, res) => {
       res.render('compose');
})

app.post('/compose', (req, res) => {
   const post ={
   title: req.body.inputdata,
   content: req.body.textareadata
};

posts.push(post);

res.render('home',{})

res.redirect('/' );
});


// app.get('/posts/:postname', (req,res)=>{

//  const  requestedTitle =  req.params.postname;
//  posts.forEach(function(post){

//  const storedTilte = post.title;
//  })

//  if( storedTilte === requestedTitle)
// {
//     console.log("Match found");
    
// }
// })





app.listen(3000, () => {

    console.log('Server started on port 3000');

}) 