export default function changeNavbar(activePage){
    //  Call this function in the constructors for each of the pages
    //  call the getHtml function and put in an elements id inner html 
    //  OR 
    //  document.getElementById('')

    let aboutPage = "";
    let homePage = "";
    let statusPage = "";

    let aboutRef = "";
    let homeRef = "";
    let statusRef = "";

    if(activePage == "About"){
        aboutPage = "active";
        homePage = "";
        statusPage = "";
    }else if(activePage == "Status"){
        aboutPage = "";
        homePage = "";
        statusPage = "active";
    }else{
        aboutPage = "";
        homePage = "active";
        statusPage = "";
    }

    console.log("About page: " + aboutPage + " Home page: " + homePage + " Status page: " + statusPage);

    //  Big string template literal
    return `
    <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="navbar-brand">Event Application</li>
          <li class="nav-item">
            <a class="nav-link ${homePage}" href="./">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${statusPage}" href="./status.html">Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${aboutPage}" href="./about.html">About</a>
          </li>
        </ul>
    </div>
  `
    //  Make sure to import function in each page
}