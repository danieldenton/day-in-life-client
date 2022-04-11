# A Day in the Life

A day in the life is a MERN stack application. Link to server repository https://github.com/danieldenton/day-in-life-server

Deployed link https://preeminent-swan-c5baf2.netlify.app/feed

# What is it?

Do you ever miss the early days of social media? When each application focused more on user needs and less on pumping out a fancy new feature to keep up with their competition? A Day in the Life is a website that aims to make casual photo sharing more engaging again. This app shows you a feed of different users, with a slideshow of their posts, rather than an endless scroll of advertisements and sponsored posts designed to maximize your screen time past what you originally intended. This is based off the idea of engaging with the profile of specific users, to get a more in depth view of what is going on in a day in the life of the individual person. Once clicking on their profile, you will be given a list of all the photo's they've shared. All of these images will be clickable, allowing you to view the picture and share your thoughts!

# API Choice

The API we chose to use is Cloudinary. We will be using this API to allow users to upload photos to their feed. Cloudinary will allow a user to upload a photo and add it to the database. We then receive JSON data that allows us to display the image that was uploaded.

# Restful Routing Chart - back-end

| **CRUD** | **URL**                  | **DESCRIPTION**                                    |
| -------- | ----------------------   | -------------------------------------------------- |
| POST     | /api-v1/users/register   | Adds a new user to database                        |
| POST     | /api-v1/users/login      | Logs in the user, sends back a token               |
| GET      | /api-v1/users            | Reads all user documents with picture subdocs      |
| GET      | /api-v1/users/:id        | Reading user document corresponding to ID          |
| PUT      | /api-v1/users/:id        | Updates user document with profile pic public_id   |
| POST     | /api-v1/pictures         | Creates picture subdoc in current user document    |
| POST     | /api-v1/pictures/preview | Uploads picture and sends back src url for preview |
| GET      | /api-v1/pictures/:id     | Read picture document corresponding to ID          |
| PUT      | /api-v1/pictures/:id     | Updates picture caption corresponding to ID        |
| DELETE   | /api-v1/pictures/:id     | Delete individul picture post corresponding to ID  |
| POST     | /api-v1/comments         | Add comments to an individual picture              |
| PUT      | /api-v1/comments/:id     | Updates comment corresponding to ID                |
| DELETE   | /api-v1/comments/:id     | Deletes comment corresponding to ID                |

# Restful Routing Chart - front-end

| **CRUD** | **URL**             | **DESCRIPTION**                                                        |
| -------- | ------------------- | ---------------------------------------------------------------------- |
| GET      | /                   | Renders a landing page that displays information about the app         |
| GET      | /login              | Renders a login form for existing users to sign in                     |
| GET      | /register           | Renders a register form for new users to create an account             |
| GET      | /about              | Renders an About page with bio components                              |
| GET      | /feed               | Renders all users with slideshow component of their pictures           |
| GET      | /profiles/:id       | Renders specific user with all corresponding photo components          |
| GET      | /pictures/:id       | Renders photo details page with all corresponding comments components  |
| GET      | /pictures/new       | Renders a photo upload form                                            |



# Wireframes

<details>
<summary>Click to show</summary>

- About us page
  ![About us page](./assets/AboutUs.png)
- Sign up page
  ![Sign up page](./assets/SignUp.png)
- Login page
  ![Sign in page](./assets/Login.png)
- Public landing page
  ![Public landing page](./assets/PublicLanding.png)
- Public feed page
  ![Public feed page](./assets/PublicFeed.png)
- Profile page
  ![Profile page](./assets/Profile.png)
- Details page
  ![Details page](./assets/Details.png)

</details>

# ERD

![ERD](./assets/ERD.png)

# User Stories

- As a user without an account, I would like to register with my name, email, and password.
- As a user without an account, I would like to see a page that explains what a day in the life is, and how it would be useful.
- As a user who finished registration, I would like to be able to sign into my created account.
- As a user who is signed in, I would like to be able to sign out of my account.
- As a user I want to post photos to my profile, so I can see and share them later.
- As a user I would like to edit any post I have already made.
- As a user I would like to delete any post I have already made.
- As a user I want to be the only one who can edit or delete my post.
- As a user I want to click on others profiles, so I can see the posts they've made.
- As a user I want to click on an individual picture of another user to see more information.
- As a user I would like to comment on a individual picture to share my thoughts.
- As a user I would like to be able to delete a comment I wrote.
- As a user I would like to be able to edit a comment I wrote.

# MVP goals

- [x] Sign up and sign in functionality.
- [x] User authentication with encrpyted passwords.
- [x] CRUD functionality for a users post
- [x] User authorization for post update and delete.
- [x] Layout for signed in user home page showing all users with a slideshow of their pictures.
- [x] Layout for unregistered user home page showing the concept of the app, and how it would be useful.

# Stretch Goals

- [x] Have the layout of the signed in user resemble a polaroid.
- [x] CRUD for comments on posts.
- [x] User authorization for comment update and delete.
- [ ] Add ability to favorite a user
- [ ] Add private profiles
- [ ] Add private photos
- [ ] Change password
