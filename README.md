POST PULSE - Modern Blog Post Management

Welcome to **Post Pulse**, a modern blog post management app built with vanilla JavaScript, HTML, CSS, and [JSON Server](https://github.com/typicode/json-server) for a mock REST API. This project demonstrates CRUD operations, dynamic DOM manipulation, and a clean, responsive UI.



 Features

- **View All Posts:**  
  See a list of all blog posts with their titles, authors, and dates.

- **Post Details:**  
  Click on a post to view its full details, including a high-resolution image, content, and author.

- **Add New Post:**  
  Use the form to add a new blog post. The post appears instantly in the list.

- **Edit Post:**  
  Edit the title and content of any post via an inline form in the details section.

- **Delete Post:**  
  Remove any post with a single click.

- **Responsive Design:**  
  Clean, modern layout that works well on desktop and tablets.



 Project Structure


 Getting Started

 1. Clone the Repository


git clone <your-repo-url>
cd Phase1/Week3CodeChallenge


 2. Install JSON Server

If you don’t have JSON Server installed globally:


npm install -g json-server


3. Start the Backend


json-server --watch db.json --port 3000


- The API will be available at `http://localhost:3000/posts`.

### 4. Open the App

Just open `index.html` in your browser (no build step needed).



📝 Usage

Viewing Posts

- All posts are listed on the left. Click any post to see its details on the right.

Adding a Post

- Fill out the "Add Post" form below the post list and submit. The new post appears instantly.

 Editing a Post

- Click a post, then click the **Edit** button (top right of the details section).
- Update the title/content and submit. Changes are saved and reflected immediately.

### Deleting a Post

- Click a post, then click the **Delete** button (top right of the details section).
- The post is removed from the list and the backend.



 Customization

- **Images:**  
  Uses [Picsum Photos](https://picsum.photos/) for high-res placeholder images. You can use your own image URLs.

- **Styling:**  
  All styles are in `style.css`. Adjust as needed for your branding or layout preferences.

- **API:**  
  Easily swap out JSON Server for a real backend by updating the `API_URL` in `index.js`.


 Example db.json

```json
{
  "posts": [
    {
      "id": 2,
      "title": "Building a Blog Manager",
      "author": "Grace Kamau",
      "content": "Here's how I built a dynamic blog manager using JSON Server, fetch API, and pure JavaScript.",
      "image": "https://picsum.photos/id/180/600/400",
      "date": "2024-06-22"
    },
    ...
  ]
}
```

---

 Advanced Features

- **First Post Details:**  
  The first post’s details are shown automatically on page load.

- **Persistent CRUD:**  
  All create, update, and delete actions are persisted to the backend (JSON Server).

- **Responsive Buttons:**  
  Edit and Delete buttons are styled and positioned at the top right of the details section.



 Troubleshooting

- **Posts not showing?**
  - Make sure JSON Server is running on port 3000.
  - Check your browser console for errors.
  - Ensure your `db.json` is valid JSON.

- **Images not loading?**
  - Check the image URLs in your `db.json`.
  - Try opening the image URL directly in your browser.

---

 Learning Goals

- Practice with RESTful APIs using fetch.
- DOM manipulation and event handling in vanilla JS.
- Responsive, accessible UI with modern CSS.
- CRUD operations and state management.

---

 Credits

- [JSON Server](https://github.com/typicode/json-server)
- [Picsum Photos](https://picsum.photos/)
- Inspired by modern blog admin dashboards.

---

 License

MIT License

---

Happy coding!
