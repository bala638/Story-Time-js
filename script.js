
 const container = document.getElementById("story-container");
 const search = document.getElementById("search");
 let allStories = JSON.parse(localStorage.getItem('stories') || '[]');

 function displayStories(stories) {
 container.innerHTML = "";
 stories.forEach(story => {
 const card = document.createElement("div");
 card.className = "card";
 card.innerHTML = `
 <h3>${story.title}</h3>
 <p><em>By ${story.author}</em></p>
 <p>${story.summary}</p>
 <button onclick='viewStory(${JSON.stringify(story)})'>Read
 More</button>
 `;
 container.appendChild(card);
 });
 }
 function viewStory(story) {
 localStorage.setItem('selectedStory', JSON.stringify(story));
 window.location.href = "story.html";
 }
 document.querySelectorAll("button[data-genre]").forEach(btn => {
btn.addEventListener("click", () => {
 const genre = btn.dataset.genre;
 if (genre === "All") displayStories(allStories);
 else displayStories(allStories.filter(s => s.genre === genre));
 });
 });
 search.addEventListener("input", () => {
 const val = search.value.toLowerCase();
 const results = allStories.filter(s =>
 s.title.toLowerCase().includes(val) ||
 s.author.toLowerCase().includes(val)
 );
 displayStories(results);
 });
 displayStories(allStories);



 function deleteStory(index){
  if(confirm("Are you sure want to delete this story ")){
    allStories.splice(index,1);
    localStorage.setItem('stories', JSON.stringify(allStories));
    displayStories(allStories);
  }

 }

 function displayStories(stories){
  container.innerHTML="";
  stories.forEach((story, index) =>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${story.title}</h3>
 <p><em>By ${story.author}</em></p>
 <p>${story.summary}</p>
 <button onclick='viewStory(${JSON.stringify(story)})'>Read
 More</button>
   <button onclick='deleteStory(${index})' style="background:#ff4d4d; color:white; margin-top:5px;">
   Delete</button> `;
   container.appendChild(card);
  });
 }