# API Documentation

## Overview
This document details the available endpoints, their descriptions, expected status codes, and the required data format.

---
# Project Folder Structure

```
back-insta/
├── .env
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── FOLDER_STRUCTURE.md
├── uploads/
├── controllers/
│   ├── post.controllres.js
│   ├── user.login.controllers.js
│   └── user.profilepic.js
├── db/
│   └── db.js
├── models/
│   ├── follwers.js
│   ├── following.js
│   ├── post.models.js
│   ├── user.login.model.js
│   └── user.profile.pic.js
├── routes/
│   ├── user.login.routes.js
│   └── user.profile.pic.js
└── services/
    ├── user.login.service.js
    └── user.profilepic.js
```
---

## Endpoints

### GET /
- **Description:** Returns a simple message confirming that the application is running.
- **Response:**
  - **Status Code:** 200
  - **Body:** "back-insta app"

---

### POST /users/UserSignup
- **Description:** Registers a new user.
- **Required Data:** JSON payload with:
  - `mobilnumber` (Number) — Mobile number; must be at least 10 digits.
  - `fullname` (String) — Full name; minimum of 3 characters.
  - `password` (String) — Password; minimum length of 6 characters.
  - `email` (String) — A valid email address.
- **Response:**
  - **On Success:** Status 201 with user data (or success message).
  - **On Failure:** Status 400 with error details.

---

### POST /profilpic/upload-profile
- **Description:** Uploads a profile image for the authenticated user.
- **Required Data:** Multipart form-data with:
  - A file field named `profileImage`.
- **Response:**
  - **On Success:** Status 200/201 with a JSON containing:
    - `message`: "Image uploaded"
    - `imagePath`: Path of the stored image.
  - **On Failure:** Status 400/500 with an error message.

---

### Additional Endpoints
- **/postModel and /post:**  
  These endpoints are linked to post creation and retrieval. The expected data structure and validation are handled in the corresponding controllers.  
  - **Common Requirements:**  
    - For creating a post: JSON payload with `caption` and `media` details.
    - For fetching posts: Proper authentication and query parameters may be required.
  - **Status Codes:**  
    - 201/200 on success.
    - 400/404/500 on error.

---

## Notes
- Authentication is assumed for routes that require a valid user session.
- File upload endpoints use [Multer](https://github.com/expressjs/multer); ensure that the form-data key matches the expected field.
- All endpoints return JSON responses on error containing an error message.

*...existing code or additional endpoints documentation may follow...*
