const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}

function gotoAdd(){
    window.location.href = 'addBH.html';
}
function gotoSubmission(){
    console.log("Redirecting to index.html");
    window.location.href = 'landingpage.html';
}
function gotoADDh(){
    window.location.href = 'addBH.html';
}

function gobac(){
    window.location.href = 'landingpage.html';
}
function gotoView(){
    window.location.href = 'viewBH.html';
}
function gotoUpdate(){
    window.location.href = 'updateBH.html';
}
function gotoList(){
    window.location.href = 'listofBH.html';
}
function gotolistBH(){
    window.location.href = 'listofBH.html';
}
function gotoApprove(){
    window.location.href = 'approve.html';
}
function gotoIndex(){
    window.location.href = 'manageusers.html';
}
function gotoUsr(){
    window.location.href = 'userprofile.html';
}
function gotoindexhh(){
    window.location.href = 'landingpage.html';
}
function gotoH(){
    window.location.href = 'viewProfile.html';
}