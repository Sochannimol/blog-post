// Initial data so the blog has posts to begin with
let posts = [
  { id: 1, title: "Welcome to My Blog", content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!" },
  { id: 2, title: "Learning JavaScript", content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation." },
  { id: 3, title: "Web Development Tips", content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary." }
];
let nextId = 4;

const addPostBtn = document.getElementById("add-post-btn");
const container = document.getElementById("blog-posts-container");

function renderPosts() {
  container.innerHTML = "";

  posts.forEach(function (post) {
    const card = document.createElement("div");
    card.className = "blog-post";

    const title = document.createElement("h2");
    title.textContent = post.title;

    const editTitleBtn = document.createElement("button");
    editTitleBtn.textContent = "Edit Title";
    editTitleBtn.addEventListener("click", function () {
      const newTitle = prompt("Edit title:", post.title);
      if (newTitle !== null && newTitle.trim() !== "") {
        post.title = newTitle.trim();
        renderPosts();
      }
    });

    const content = document.createElement("p");
    content.textContent = post.content;

    const editContentBtn = document.createElement("button");
    editContentBtn.textContent = "Edit Content";
    editContentBtn.addEventListener("click", function () {
      const newContent = prompt("Edit content:", post.content);
      if (newContent !== null && newContent.trim() !== "") {
        post.content = newContent.trim();
        renderPosts();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Post";
    deleteBtn.addEventListener("click", function () {
      posts = posts.filter(function (p) {
        return p.id !== post.id;
      });
      renderPosts();
    });

    card.append(title, editTitleBtn, content, editContentBtn, deleteBtn);
    container.appendChild(card);
  });
}

addPostBtn.addEventListener("click", function () {
  const title = prompt("Enter a title for the new post:");
  if (title === null || title.trim() === "") return;

  const content = prompt("Enter the content for the new post:");
  if (content === null || content.trim() === "") return;

  posts.push({ id: nextId++, title: title.trim(), content: content.trim() });
  renderPosts();
});

renderPosts();