<div align="center">
  <h1>BlogSite</h1>
  <img src="assets/New Banner.jpg" />
</div>

# A sneak peek into what we have here-
  
 <p align="center">
 <img src="assets/blogsitegiff.gif" align = "center"  width=600px/>
 </p>

## About-

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-20-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ALPHAVIO/BlogSite)](https://dependabot.com)  

- 'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis.
<br/>

- This is a dynamically updating Blog posting website developed primarily using Node Js with EJS template engine and Mongoose as ODM(Object Data Modeling library).  [Visit BlogSite](https://alphavio-daily-journal.herokuapp.com)

## Tech Stack-
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img alt="EJS template engine" src="https://img.shields.io/badge/EJS template engine%20-%23039BE5.svg?&style=for-the-badge&logo=EJStemplateengine"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
<img alt="Mongoose" src ="https://img.shields.io/badge/Mongoose-%234ea94b.svg?&style=for-the-badge&logo=Mongoose&logoColor=white"/>
<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>

## Environment Setup for local use-

* Drop a :star: on the GitHub repository.
<br/>

* Download and install a code/ text editor.
    - Recommended-
        - [Download VS Code](https://code.visualstudio.com/download)
        - [Download Atom](https://atom.io/)
<br/>

* Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you download Node, npm also gets installed by default)
<br/>

* Mongo DB community editition is free and a great software in order to work with MongoDB applications. [Download Mongo DB community editition](https://docs.mongodb.com/manual/administration/install-community/)
<br/>

* Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to access the data. [Download Robo 3T](https://robomongo.org/download) **(optional)**
<br/>

* Clone the repository by running command
```
git clone https://github.com/ <your user-name> /BlogSite.git
```
in your git bash.
<br/>

* Run command `cd BlogSite`.
<br/>

* Run this command to install all dependencies for the project.
```
npm install
```

<br/>

* Adding secret key for JWT auth.
  * Run this command when inside the root directory to make a `.env` file.
  ```
  touch .env
  ```
  * Now add this to the `.env` file
  ```
  SECRET_KEY = AlphaVio
  URL = mongodb://localhost:27017/blogDB
  ```
<br/>

* Testing : Run this command on your terminal/ bash to start the Mongo server on port 27017(default).
```
mongod
```
<br/>

* Run this command to start the project.
```
npm run start
```

* Run this command to start the project as a developer.
```
npm run dev
```
<br/>

* Open link to view the website in your browser window if it doesn't open automatically.
```
http://localhost:3000/
```
<br/>

* You can learn more about EJS template engine and its syntax to know how we can use it inside our HTML using the [documentation](https://ejs.co/#docs)
<br/>

* Now you are all set to use this project.

**Disclaimer-**  
The `Contact Us` feature might not work in the local environment since the API-Key has not been shared. If you still want to work on it, generate your own API key from [Mail Gun](https://www.mailgun.com/) and include it in the `.env` file as 
```
API-KEY = <your-api-key>
```  

#### Some useful Mongo DB commands if you are using the terminal instead of the GUI-
```
show dbs
use db <db name>
show collections
<db name> .find()
```

#### Project Deployed on Heroku : [Link](https://alphavio-daily-journal.herokuapp.com)

## Open Source Events Project is associated with:

<img align="right" src="assets/event1.png" width = "100" height = "80"><b>1. JGEC Winter of Code</b>

- JWoC ( JGEC Winter of Code) is a program organised by Developers JGEC in collaboration with Sristi 2020 which helps students to plunge into Open Source contribution and get the realm of Software Development.

<img align="right" src="assets/event2.png" width = "100" height = "80"><b>2. Mexili Winter of Code</b>

- Mexili is a Free and Open Source organization whose motivation is to funnel learning and implementation through Open Source Software Development.

<img align="right" src="assets/event3.png" width = "100" height = "80"><b>3. GirlScript Summer of Code</b>

- GirlScript Summer of Code is the 3 month long Open Source program  conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity.

## Maintainers ✨
<table>
  <tr>
    <td align="center"><a href="https://github.com/Pranav016"><img src="https://avatars.githubusercontent.com/u/54665036?s=460&u=1bff30cf96a1502a7abd09755f179197007bc345&v=4" width="100px;" alt=""/><br /><sub><b>Pranav Mendiratta</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Pranav016" title="Code">💻</a><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Pranav016" title="Documentation">📖</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Pranav016" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://ananya-negi.herokuapp.com/"><img src="https://avatars.githubusercontent.com/u/54092197?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ananya Negi</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=AnanyaNegi" title="Code">💻</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=AnanyaNegi" title="Documentation">📖</a> <a href="#maintenance-AnanyaNegi" title="Maintenance">🚧</a></td>
  </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/anubhab-sarkar-webwriter/"><img src="https://avatars.githubusercontent.com/u/76936580?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anubhab Sarkar</b></sub></a><br /><a href="#design-anubhab1710" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/Subhra264"><img src="https://avatars.githubusercontent.com/u/59690052?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Subhra264</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Subhra264" title="Code">💻</a></td>
    <td align="center"><a href="http://sahilsaha.me"><img src="https://avatars.githubusercontent.com/u/35343652?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sahil Saha</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=sahilsaha7773" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/uttu2"><img src="https://avatars.githubusercontent.com/u/47916726?v=4?s=100" width="100px;" alt=""/><br /><sub><b>uttu2</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=uttu2" title="Documentation">📖</a></td>
    <td align="center"><a href="https://indiancovid19tracker.herokuapp.com/"><img src="https://avatars.githubusercontent.com/u/59636849?v=4?s=100" width="100px;" alt=""/><br /><sub><b>pankaj kumar bijarniya</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=pankajkumarbij" title="Documentation">📖</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=pankajkumarbij" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Niveditha18"><img src="https://avatars.githubusercontent.com/u/59333801?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Niveditha Palli</b></sub></a><br /><a href="#content-Niveditha18" title="Content">🖋</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Niveditha18" title="Code">💻</a></td>
    <td align="center"><a href="https://indiancovid19tracker.herokuapp.com/"><img src="https://avatars.githubusercontent.com/u/59636719?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucky kumari</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=luckykumarirai" title="Documentation">📖</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=luckykumarirai" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://kanhaiyalal.000webhostapp.com/Kanhaiya.html"><img src="https://avatars.githubusercontent.com/u/58850584?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kanhaiya lal</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=mak-ux" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tusharjain0022"><img src="https://avatars.githubusercontent.com/u/59157988?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tushar Jain</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=tusharjain0022" title="Documentation">📖</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=tusharjain0022" title="Code">💻</a></td>
    <td align="center"><a href="https://karunkarthik-portfolio.netlify.app/"><img src="https://avatars.githubusercontent.com/u/58992593?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Karun Karthik</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=karunkarthik-git" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/HarshitAditya27"><img src="https://avatars.githubusercontent.com/u/71604531?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harshit Aditya</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=HarshitAditya27" title="Code">💻</a></td>
    <td align="center"><a href="https://aayush-hub.github.io/Aayush-Garg-Portfolio/"><img src="https://avatars.githubusercontent.com/u/65889104?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aayush Garg</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Aayush-hub" title="Documentation">📖</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Aayush-hub" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Abhijay007"><img src="https://avatars.githubusercontent.com/u/64387054?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abhijay Jain</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Abhijay007" title="Code">💻</a> <a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Abhijay007" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/cmonojit/"><img src="https://avatars.githubusercontent.com/u/49222090?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Monojit Chakraborty</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=mcmonojit" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Ankita297"><img src="https://avatars.githubusercontent.com/u/67833077?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ankita297</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=Ankita297" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/aniket-lodh-998b34199"><img src="https://avatars.githubusercontent.com/u/55927827?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aniket Lodh</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=aniketlodh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/m-code12"><img src="https://avatars.githubusercontent.com/u/53649201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Monika Jha</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=m-code12" title="Code">💻</a></td>
    <td align="center"><a href="https://vispprofile.netlify.app/"><img src="https://avatars.githubusercontent.com/u/47056243?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vismitap</b></sub></a><br /><a href="https://github.com/ALPHAVIO/BlogSite/commits?author=vismitap" title="Code">💻</a></td>

  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
