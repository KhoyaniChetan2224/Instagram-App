
# Instagram Clone - Frontend

This project is a frontend implementation of an Instagram-like application built using the MERN stack. It provides features such as user authentication, profile management, posting, messaging, and more.

## Features

- **User Authentication**: Login, signup, and password recovery.
- **Profile Management**: Edit profile, view profiles, and follow/unfollow users.
- **Posts and Reels**: Create, view, and interact with posts and reels.
- **Messaging**: Chat with other users in real-time.
- **Search**: Search for users and posts.
- **Notifications**: View and manage notifications.
- **Settings**: Manage account settings and privacy.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js (not included in this folder)
- **Database**: MongoDB (not included in this folder)
- **Icons**: Lucide-react, React-icons

## Folder Structure

```
src/
├── App.jsx
├── pages/
│   ├── Context/
│   │   └── UserLogin.jsx
│   ├── Components/
│   │   └── UploadReel.js
│   ├── ChetBoxHeader/
│   │   └── Header.jsx
│   ├── chetabox/
│   │   └── ChatBox.jsx
│   ├── footar-menu/
│   │   ├── PlaySquare.jsx
│   │   ├── Profile.jsx
│   │   ├── ProfileMessage.jsx
│   │   ├── Reels.jsx
│   │   └── Scarch.jsx
│   ├── header-menu/
│   │   ├── Likebutton.jsx
│   │   ├── Message.jsx
│   │   ├── NewRequest.jsx
│   │   └── NewRequestManage.jsx
│   ├── Profile-Page/
│   │   ├── ActivitySetting.jsx
│   │   ├── EditProfile.jsx
│   │   └── SettingAndActivity.jsx
│   ├── ViewProfileUser/
│   │   └── ViewProfile.jsx
│   ├── EmailSignup.jsx
│   ├── ForgotPassword.jsx
│   ├── LoginPage.jsx
│   ├── LoginWthFaceBook.jsx
│   ├── OpenHomePage.jsx
│   ├── RobotSecurityPage.jsx
│   ├── UserSingup.jsx
│   └── YourStory.jsx
└── BottomNav.jsx
```

## Installation

1. Clone the repository.
2. Navigate to the `frontend` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
VITE_BASE_URL=<your-backend-url>
```


## /ChatBox
- **Description:** Chat interface that allows users to send and receive messages.
- **Data Required:**  
  - Message text (string) entered in the input field.
- **Expected Status:**  
  - On sending a message, the page updates with status _200_ (successful message submission).

---

## /ChetBoxHeader (Header)
- **Description:** Header for the chat interface (found in `ChetBoxHeader/Header.jsx`).
- **Data Required:**  
  - No external data is required.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /UploadReel
- **Description:** Interface for uploading video reels.
- **Data Required:**  
  - A video file (`video/*`)  
  - A caption (string)
  - User identifier (set in the component or context)
- **Expected Status:**  
  - On successful upload, a 201-like response is assumed (reel uploaded notification).

---

## /PlaySquare
- **Description:** UI for creating a new post.
- **Data Required:**  
  - An image file (via file input, image/*)  
  - Caption text (string)
- **Expected Status:**  
  - On submission, if both fields are provided, a new post is created with a status _201_ equivalent.

---

## /Profile
- **Description:** Displays the user’s profile with profile picture, bio, and posts.
- **Data Required:**  
  - User data loaded from context or via API (e.g., profilePic, username, bio, posts, followers, following)
- **Expected Status:**  
  - Renders user information with status _200_ if data is available.

---

## /ProfileMessage
- **Description:** Page showing messaging details for a particular profile.
- **Data Required:**  
  - User’s profile information and chat history (fetched internally)
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /Reels
- **Description:** Page that displays a list of reels.
- **Data Required:**  
  - Data fetched from the backend API showing reels (video URL, caption)
- **Expected Status:**  
  - Renders list of reels with status _200_.

---

## /Scarch
- **Description:** Search interface to find users or posts.
- **Data Required:**  
  - Query parameter `q` (string) entered via a text input.
- **Expected Status:**  
  - Displays search results with status _200_.

---

## /Likebutton
- **Description:** Component that displays like functionality (reaction UI).
- **Data Required:**  
  - No external data; relies on component props or internal state.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /Message
- **Description:** Messaging page component for handling messages.
- **Data Required:**  
  - Messages and user credentials provided through context or API.
- **Expected Status:**  
  - Loads messages with status _200_.

---

## /NewRequest
- **Description:** Page showing new requests (e.g., friend or follow requests).
- **Data Required:**  
  - Request data loaded from API or context.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /NewRequestManage
- **Description:** UI to manage (select/delete/confirm) new requests.
- **Data Required:**  
  - List of new request items, typically including user images and names.
- **Expected Status:**  
  - Actions (delete/confirm) result in updates with status _200_ on success.

---

## /ActivitySetting
- **Description:** Page displaying activity-related settings (Saved, Archive, etc.).
- **Data Required:**  
  - No external data needed; displays static rows and optionally dynamic data (via API or context).
- **Expected Status:**  
  - Loads successfully with status _200_.

---

## /Saved
- **Description:** Displays saved posts (organized in sections).
- **Data Required:**  
  - Array of saved post sections with images and titles.
- **Expected Status:**  
  - Renders grid of saved items with status _200_.

---

## /EditProfile
- **Description:** Allows the user to edit profile details.
- **Data Required:**  
  - Input values:  
    - Full Name  
    - Username  
    - Pronouns  
    - Bio  
    - Gender (dropdown selection)
- **Expected Status:**  
  - Successful update returns status _200_ (and navigates to a confirmation page).

---

## /SettingAndActivity
- **Description:** Displays a combined view of account settings and activity.
- **Data Required:**  
  - Settings data provided in the component (icons, labels, and optional counts).
- **Expected Status:**  
  - Renders complete settings list with status _200_.

---

## /Components/PostGrid
- **Description:** A component to display posts in a grid layout.
- **Data Required:**  
  - `posts` prop: an array of post objects (each with `_id` and `image` field)
- **Expected Status:**  
  - Displays a grid of posts with status _200_.

---

## /ProfileHeader
- **Description:** Component showing user profile header details.
- **Data Required:**  
  - Props:  
    - `user` (object with `username`, `profilePic`, `bio`, `followers`, `following`)  
    - `postCount` (number)
- **Expected Status:**  
  - Renders user header with status _200_.

---

## /ViewProfile
- **Description:** Page that shows a user's profile by username.
- **Data Required:**  
  - URL parameter: `username`  
  - Fetches user data (profile and posts) via API.
- **Expected Status:**  
  - Renders profile view with status _200_ once data is loaded.

---

## /BottomNav
- **Description:** Bottom navigation component for quick access to core features.
- **Data Required:**  
  - No input data required.
- **Expected Status:**  
  - Displays navigation icons with status _200_.

---

## /EmailSignup
- **Description:** Page for email-based signup (includes birthday input).
- **Data Required:**  
  - User date of birth selections (month, day, year)  
  - Other signup data may be captured in later steps.
- **Expected Status:**  
  - Proceeds to next step on valid input with status _200_.

---

## /ForgotPassword
- **Description:** Page to initiate password recovery.
- **Data Required:**  
  - Username, email, or phone number (string)
- **Expected Status:**  
  - If a valid request, sends a link with status _200_.

---

## /LoginPage
- **Description:** Standard login interface (username/email and password).
- **Data Required:**  
  - Username (or phone/email)  
  - Password
- **Expected Status:**  
  - On successful login, navigates to home with status _200_.

---

## /LoginWthFaceBook
- **Description:** Login interface using Facebook credentials.
- **Data Required:**  
  - Email/phone and password as required by the form.
- **Expected Status:**  
  - On successful login, navigates to home with status _200_.

---

## /OpenHomePage
- **Description:** The home page where the user enters the app.
- **Data Required:**  
  - No input; loads posts and stories from API.
- **Expected Status:**  
  - Loads successfully with status _200_.

---

## /RobotSecurity
- **Description:** Page that presents a robot/Mr. security challenge before proceeding.
- **Data Required:**  
  - No input required (other than a checkbox confirmation).
- **Expected Status:**  
  - On confirmation, moves to the next page with status _200_.

---

## /UserSingup
- **Description:** User signup page for creating a new account.
- **Data Required:**  
  - Mobile Number or Email (string)  
  - Full Name (string)  
  - Username  
  - Password
- **Expected Status:**  
  - On successful signup, receives a token and navigates (status _200_).

---

## /YourStory
- **Description:** Displays the user's story in video form.
- **Data Required:**  
  - No additional data required; video source is static or predefined.
- **Expected Status:**  
  - Plays the story content with status _200_.

---

## /ChatBox
- **Description:** Chat interface that allows users to send and receive messages.
- **Data Required:**  
  - Message text (string) entered in the input field.
- **Expected Status:**  
  - On sending a message, the page updates with status _200_ (successful message submission).

---

## /ChetBoxHeader (Header)
- **Description:** Header for the chat interface (found in `ChetBoxHeader/Header.jsx`).
- **Data Required:**  
  - No external data is required.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /UploadReel
- **Description:** Interface for uploading video reels.
- **Data Required:**  
  - A video file (`video/*`)  
  - A caption (string)
  - User identifier (set in the component or context)
- **Expected Status:**  
  - On successful upload, a 201-like response is assumed (reel uploaded notification).

---

## /PlaySquare
- **Description:** UI for creating a new post.
- **Data Required:**  
  - An image file (via file input, image/*)  
  - Caption text (string)
- **Expected Status:**  
  - On submission, if both fields are provided, a new post is created with a status _201_ equivalent.

---

## /Profile
- **Description:** Displays the user’s profile with profile picture, bio, and posts.
- **Data Required:**  
  - User data loaded from context or via API (e.g., profilePic, username, bio, posts, followers, following)
- **Expected Status:**  
  - Renders user information with status _200_ if data is available.

---

## /ProfileMessage
- **Description:** Page showing messaging details for a particular profile.
- **Data Required:**  
  - User’s profile information and chat history (fetched internally)
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /Reels
- **Description:** Page that displays a list of reels.
- **Data Required:**  
  - Data fetched from the backend API showing reels (video URL, caption)
- **Expected Status:**  
  - Renders list of reels with status _200_.

---

## /Scarch
- **Description:** Search interface to find users or posts.
- **Data Required:**  
  - Query parameter `q` (string) entered via a text input.
- **Expected Status:**  
  - Displays search results with status _200_.

---

## /Likebutton
- **Description:** Component that displays like functionality (reaction UI).
- **Data Required:**  
  - No external data; relies on component props or internal state.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /Message
- **Description:** Messaging page component for handling messages.
- **Data Required:**  
  - Messages and user credentials provided through context or API.
- **Expected Status:**  
  - Loads messages with status _200_.

---

## /NewRequest
- **Description:** Page showing new requests (e.g., friend or follow requests).
- **Data Required:**  
  - Request data loaded from API or context.
- **Expected Status:**  
  - Renders successfully with status _200_.

---

## /NewRequestManage
- **Description:** UI to manage (select/delete/confirm) new requests.
- **Data Required:**  
  - List of new request items, typically including user images and names.
- **Expected Status:**  
  - Actions (delete/confirm) result in updates with status _200_ on success.

---

## /ActivitySetting
- **Description:** Page displaying activity-related settings (Saved, Archive, etc.).
- **Data Required:**  
  - No external data needed; displays static rows and optionally dynamic data (via API or context).
- **Expected Status:**  
  - Loads successfully with status _200_.

---

## /Saved
- **Description:** Displays saved posts (organized in sections).
- **Data Required:**  
  - Array of saved post sections with images and titles.
- **Expected Status:**  
  - Renders grid of saved items with status _200_.

---

## /EditProfile
- **Description:** Allows the user to edit profile details.
- **Data Required:**  
  - Input values:  
    - Full Name  
    - Username  
    - Pronouns  
    - Bio  
    - Gender (dropdown selection)
- **Expected Status:**  
  - Successful update returns status _200_ (and navigates to a confirmation page).

---

## /SettingAndActivity
- **Description:** Displays a combined view of account settings and activity.
- **Data Required:**  
  - Settings data provided in the component (icons, labels, and optional counts).
- **Expected Status:**  
  - Renders complete settings list with status _200_.

---

## /Components/PostGrid
- **Description:** A component to display posts in a grid layout.
- **Data Required:**  
  - `posts` prop: an array of post objects (each with `_id` and `image` field)
- **Expected Status:**  
  - Displays a grid of posts with status _200_.

---

## /ProfileHeader
- **Description:** Component showing user profile header details.
- **Data Required:**  
  - Props:  
    - `user` (object with `username`, `profilePic`, `bio`, `followers`, `following`)  
    - `postCount` (number)
- **Expected Status:**  
  - Renders user header with status _200_.

---

## /ViewProfile
- **Description:** Page that shows a user's profile by username.
- **Data Required:**  
  - URL parameter: `username`  
  - Fetches user data (profile and posts) via API.
- **Expected Status:**  
  - Renders profile view with status _200_ once data is loaded.

---

## /BottomNav
- **Description:** Bottom navigation component for quick access to core features.
- **Data Required:**  
  - No input data required.
- **Expected Status:**  
  - Displays navigation icons with status _200_.

---

## /EmailSignup
- **Description:** Page for email-based signup (includes birthday input).
- **Data Required:**  
  - User date of birth selections (month, day, year)  
  - Other signup data may be captured in later steps.
- **Expected Status:**  
  - Proceeds to next step on valid input with status _200_.

---

## /ForgotPassword
- **Description:** Page to initiate password recovery.
- **Data Required:**  
  - Username, email, or phone number (string)
- **Expected Status:**  
  - If a valid request, sends a link with status _200_.

---

## /LoginPage
- **Description:** Standard login interface (username/email and password).
- **Data Required:**  
  - Username (or phone/email)  
  - Password
- **Expected Status:**  
  - On successful login, navigates to home with status _200_.

---

## /LoginWthFaceBook
- **Description:** Login interface using Facebook credentials.
- **Data Required:**  
  - Email/phone and password as required by the form.
- **Expected Status:**  
  - On successful login, navigates to home with status _200_.

---

## /OpenHomePage
- **Description:** The home page where the user enters the app.
- **Data Required:**  
  - No input; loads posts and stories from API.
- **Expected Status:**  
  - Loads successfully with status _200_.

---

## /RobotSecurity
- **Description:** Page that presents a robot/Mr. security challenge before proceeding.
- **Data Required:**  
  - No input required (other than a checkbox confirmation).
- **Expected Status:**  
  - On confirmation, moves to the next page with status _200_.

---

## /UserSingup
- **Description:** User signup page for creating a new account.
- **Data Required:**  
  - Mobile Number or Email (string)  
  - Full Name (string)  
  - Username  
  - Password
- **Expected Status:**  
  - On successful signup, receives a token and navigates (status _200_).

---

## /YourStory
- **Description:** Displays the user's story in video form.
- **Data Required:**  
  - No additional data required; video source is static or predefined.
- **Expected Status:**  
  - Plays the story content with status _200_.

---
