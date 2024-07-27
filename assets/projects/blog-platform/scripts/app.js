document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (title && content) {
        createPost(title, content);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
});

function createPost(title, content) {
    const post = {
        id: Date.now(),
        title,
        content
    };

    const posts = getPosts();
    posts.push(post);
    savePosts(posts);
    displayPosts();
}

function displayPosts() {
    const posts = getPosts();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

function deletePost(id) {
    const posts = getPosts();
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
    displayPosts();
}

function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Display posts on initial load
displayPosts();
