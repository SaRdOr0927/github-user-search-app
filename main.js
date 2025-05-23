const DarkAndLight = document.getElementById('dark-and-light_icon')
const DarkAndLightText = document.querySelector('.dark-and-light_text')
const body = document.querySelector('body')
const siteTitle = document.querySelector('.site-title')
const searchBox = document.getElementById('search-box_js')
const siteCard = document.getElementById('siteCard_js')
const Name = document.querySelector('.Name')
const ProfileOwnersBirth = document.querySelector('.Profile-owners-birth')
const bioText = document.querySelector('.bio-text')
const FollowersCardJs = document.getElementById('Followers-card_js')
const icon = document.querySelectorAll('.icon')
for (let i = 0; i < icon.length; i++) {
    DarkAndLight.addEventListener('click', () => {
        if(DarkAndLightText.textContent == "DARK"){
            icon[i].style.color = "#fff"
        }else if (DarkAndLightText.textContent == "LIGHT"){
            icon[i].style.color = "#4B6A9B"
        }
    })
}

DarkAndLight.addEventListener('click', () => {

    if(DarkAndLightText.textContent == "DARK"){
        DarkAndLightText.textContent = "LIGHT"
        DarkAndLightText.style.color = "#fff"
        body.style.background = "#141D2F"
        siteTitle.style.color = "#FFF"
        searchBox.classList.remove = "search-box"
        searchBox.classList = "search-boxDark"
        siteCard.classList.remove = "site-card"
        siteCard.classList = "site-card_Dark "
        Name.style.color = "#FFF"
        ProfileOwnersBirth.style.color = "#fff"
        bioText.style.color = "#fff"
        FollowersCardJs.classList.remove = "Followers-card"
        FollowersCardJs.classList = "Followers-card_Dark"

    }else if (DarkAndLightText.textContent == "LIGHT"){
        DarkAndLightText.textContent = "DARK"
        DarkAndLightText.style.color = "#697C9A"
        body.style.background = "#F6F8FF"
        siteTitle.style.color = "#222731"
        searchBox.classList.remove = "search-boxDark"
        searchBox.classList = "search-box"
        siteCard.classList.remove = "site-card_Dark "
        siteCard.classList = "site-card"
        Name.style.color = "#2B3442"
        ProfileOwnersBirth.style.color = "#697C9A"
        bioText.style.color = "#4B6A9B"
        FollowersCardJs.classList.remove = "Followers-card_Dark"
        FollowersCardJs.classList = "Followers-card"
    }else{
        alert("Xattolik ")
    }

})


const btn = document.getElementById('Search-btn');
const SearchInput = document.getElementById('search-input');


btn.addEventListener("click", () => {
  usernameinput = SearchInput.value.trim();
  UserName();
});

async function UserName() {
  try {
    const response = await fetch(`https://api.github.com/users/${usernameinput}`);
    const data = await response.json();

    document.querySelector(".card-img").src = data.avatar_url;
    document.querySelector(".Name").textContent = data.name || "Ism Topilmadi";
    document.querySelector(".link").textContent = "@" + data.login;
    document.querySelector(".link").href = data.html_url;
    document.querySelector(".Profile-owners-birth").textContent = "Joined " + new Date(data.created_at).toDateString();
    document.querySelector(".bio-text").textContent = data.bio || "Bio Topilmadi";

    let numbers = document.querySelectorAll(".Followers-card_number");
    numbers[0].textContent = data.public_repos;
    numbers[1].textContent = data.followers;
    numbers[2].textContent = data.following;

  } catch (err) {
    alert('Foydalanuvchi topilmadi!');
    console.log(err);
  }
}