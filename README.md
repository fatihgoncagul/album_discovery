# Album Discovery

This React application allows you to view and edit users and their albums. Below is a explanation of the app's features and components:


### 1. UsersPage
-  Main screen for listing users and searching among them.
- **Components**: [UserList](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/UserList.jsx), [UserCard](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/UserCard.jsx)
- **Features**:
  - Search functionality to filter users.
  - Access to user details via a "Details" button.
![UsersPage Screenshot](https://drive.google.com/uc?id=10p8_USdV4Whk38HbZj9ucj8OFqu7a0c3)


### 2. UsersDetailPage
- Displays the details of the selected user and their albums.
- **Components**:
  - [UserDetailCard](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/UserDetailCard.jsx): Displays user information.
  - [UserAlbumList](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/UserAlbumList.jsx): Lists the user's albums.
  - [AlbumDetailDialog](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/AlbumDetailDialog.jsx): Shows album details in a dialog.
  - [UserEditDialog](https://github.com/fatihgoncagul/album_discovery/blob/main/src/components/UserEditDialog.jsx): Edits user information.
 ![UsersDetailPage](https://drive.google.com/uc?id=1u_ZgQOaGuYcsDI5c_wPGyjO5M5f6ZoQv)
  

### 3. UserContext
- UserContext is a central context used to manage and share user-related state across the application.
- Fetches the user list from an API endpoint.
- Allows easy access to the selected user's details across different components.
- Combines updated user data with the fetched list to maintain an up-to-date user state.

