function displayPosts() {
  fetch("http://localhost:4000/posts")
    .then((res) => res.json())
    .then((posts) => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-item");
        postDiv.dataset.id = post.id;

        // Show title, author, and date
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p><strong>Author:</strong> ${post.author}</p>
          <p><strong>Date:</strong> ${post.date || "N/A"}</p>
        `;

        postDiv.addEventListener("click", () => {
          handlePostClick(post.id);
        });

        postList.appendChild(postDiv);
      });
    });
}



document.addEventListener("DOMContentLoaded", displayPosts);

function handlePostClick(postId) {
  fetch(`http://localhost:4000/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
      const detailDiv = document.getElementById("post-details");
      detailDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.author}</p>
        <img src="${post.image}" alt="${post.title}" />
        <p>${post.content}</p>
      `;
    });
}
document.getElementById("add-post-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").value || "https://via.placeholder.com/150";

  fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author, content, image })
  })
  .then(res => res.json())
  .then(() => {
    // Clear the form
    document.getElementById("add-post-form").reset();
    // Refresh the post list
    displayPosts();
  });
});
