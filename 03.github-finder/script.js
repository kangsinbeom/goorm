const profile = document.getElementById("profile");
const repo = document.getElementById("repo");
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const nickname = event.target.value;
    createProfile(nickname);
  }
});

async function fetchProfile(nickname) {
  const response = await fetch(`https://api.github.com/users/${nickname}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error));
  return response;
}

async function fetchRepo(nickname) {
  const response = await fetch(
    `https://api.github.com/users/${nickname}/repos?sort=created&direction=desc`
  )
    .then((res) => res.json())
    .catch((error) => console.error("error", error));
  return response;
}

async function createProfile(nickname) {
  const profileData = await fetchProfile(nickname);
  const repos = await fetchRepo(nickname);
  const currentRepos = repos.slice(0, 5);
  const { avatar_url, followers, following, public_repos, public_gists } =
    profileData;
  const profileImageBox = document.createElement("div");
  profileImageBox.classList.add("profile__image-box");

  const profileImageButton = document.createElement("button");
  profileImageButton.classList.add("profile__image-button");
  profileImageButton.innerText = "View Profile";
  const profileImage = document.createElement("img");
  profileImage.classList.add("profile__image");
  profileImage.setAttribute("src", avatar_url);
  profileImageBox.append(profileImage);
  profileImageBox.append(profileImageButton);
  profile.append(profileImageBox);

  const profileInfoBox = document.createElement("div");
  profileInfoBox.classList.add("profile__info-box");

  const profileinfoBadgeBox = document.createElement("div");
  profileinfoBadgeBox.classList.add("profile__info-badge-box");
  const repoBadge = document.createElement("button");
  repoBadge.classList.add("repoBadge");
  repoBadge.classList.add("badge");
  repoBadge.innerText = `Public Repos: ${public_repos}`;
  const gistBadge = document.createElement("button");
  gistBadge.classList.add("gistBadge");
  gistBadge.classList.add("badge");
  gistBadge.innerText = `Public Gists: ${public_gists}`;
  const followerBadge = document.createElement("button");
  followerBadge.classList.add("followerBadge");
  followerBadge.classList.add("badge");
  followerBadge.innerText = `Followers: ${followers}`;
  const followingBadge = document.createElement("button");
  followingBadge.classList.add("followingBadge");
  followingBadge.classList.add("badge");
  followingBadge.innerText = `Following: ${following}`;
  profileinfoBadgeBox.append(repoBadge);
  profileinfoBadgeBox.append(gistBadge);
  profileinfoBadgeBox.append(followerBadge);
  profileinfoBadgeBox.append(followingBadge);
  profileInfoBox.append(profileinfoBadgeBox);
  profile.append(profileInfoBox);

  const repoTitle = document.createElement("p");
  repoTitle.classList.add("repo__title");
  repoTitle.innerText = "Latest Repos";
  const repoList = document.createElement("div");
  repoList.classList.add("repo__list");

  currentRepos.map((repo) => {
    const repoItem = document.createElement("div");
    repoItem.classList.add("repo__item");

    const repoItemTitle = document.createElement("p");
    repoItemTitle.classList.add("repo__item-title");
    repoItemTitle.innerText = repo.name;

    const repoBadgeBox = document.createElement("div");
    repoBadgeBox.classList.add("repo__item-badge-box");

    const satrsBadge = document.createElement("button");
    satrsBadge.classList.add("satrsBadge");
    satrsBadge.classList.add("badge");
    satrsBadge.innerHTML = `Stars: ${repo.stargazers_count}`;

    const watchersBadge = document.createElement("button");
    watchersBadge.classList.add("watchersBadge");
    watchersBadge.classList.add("badge");
    watchersBadge.innerHTML = `watchers: ${repo.watchers}`;

    const forksBadge = document.createElement("button");
    forksBadge.classList.add("forksBadge");
    forksBadge.classList.add("badge");
    forksBadge.innerHTML = `Forks: ${repo.forks}`;

    repoBadgeBox.append(satrsBadge);
    repoBadgeBox.append(watchersBadge);
    repoBadgeBox.append(forksBadge);

    repoItem.append(repoItemTitle);
    repoItem.append(repoBadgeBox);
    repoList.append(repoItem);
  });

  repo.append(repoTitle);
  repo.append(repoList);
}
