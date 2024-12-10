document.addEventListener("DOMContentLoaded", () => {
  const postBtn = document.getElementById("post-btn");
  const postContent = document.getElementById("post-content");
  const postsContainer = document.getElementById("posts-container");

  // Create a new post
  postBtn.addEventListener("click", () => {
    const content = postContent.value.trim();
    if (!content) return;

    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
      <div class="post-content">${content}</div>
      <div class="post-footer">
        <span class="upvote">⬆️ 0</span>
        <button class="comment-btn">Comment</button>
      </div>
      <div class="comment-section">
        <div class="comment-input">
          <textarea placeholder="Write a comment..."></textarea>
          <button class="add-comment">Add Comment</button>
        </div>
      </div>
    `;

    postsContainer.prepend(post);
    postContent.value = "";

    // Handle upvote
    const upvote = post.querySelector(".upvote");
    upvote.addEventListener("click", () => {
      const count = parseInt(upvote.textContent.split(" ")[1]);
      upvote.textContent = `⬆️ ${count + 1}`;
    });

    // Handle comment
    const addCommentBtn = post.querySelector(".add-comment");
    const commentInput = post.querySelector(".comment-input textarea");
    const commentSection = post.querySelector(".comment-section");

    addCommentBtn.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      if (!commentText) return;

      const comment = document.createElement("div");
      comment.classList.add("comment");
      comment.textContent = commentText;

      commentSection.append(comment);
      commentInput.value = "";
    });
  });
});
