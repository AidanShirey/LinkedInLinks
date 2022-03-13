var startingLinkAmount = 1;

function addlinkentry() {
    let linkamount = ++startingLinkAmount;
    let linkname = 'Link ' + linkamount + ':&nbsp;';
    let linkid = 'link' + linkamount;
    let linkentrytoappend = document.createElement('div');
    let linkinputtoappend = document.createElement('input');
    linkinputtoappend.setAttribute('id', linkid);
    linkinputtoappend.setAttribute('placeholder', 'Enter your link here.');
    linkentrytoappend.setAttribute('class', 'linkentry');
    linkentrytoappend.innerHTML = linkname;
    linkentrytoappend.append(linkinputtoappend);
    document.getElementById('profilelinks').append(linkentrytoappend);
}

function savedata(){
    let cookieprofile = document.getElementById('profilenameinput').value;
    let cookielinkarray = [];
    for (let i = 0; i < startingLinkAmount; i++){
        cookielinkarray.push(document.getElementById('link' + (i + 1)).value);
    }
    var CookieDate = new Date;
    CookieDate.setFullYear(CookieDate.getFullYear() + 100);
    document.cookie = "profile=" + JSON.stringify({profilename: cookieprofile, links: cookielinkarray}) + '; expires=' + CookieDate.toUTCString() + ';';
}

function viewprofile(){
    document.getElementById('profileoutput').setAttribute('class', '');
    document.getElementById('profileinput').setAttribute('class', 'unrender');
}

function viewsettings(){
    document.getElementById('profileinput').setAttribute('class', '');
    document.getElementById('profileoutput').setAttribute('class', 'unrender');
}

function loadprofile() {
    if(document.cookie.match(/^(.*;)?\s*profile\s*=\s*[^;]+(.*)?$/) != null){
        let json = document.cookie.substring(8);
        const obj = JSON.parse(json);
        document.getElementById('cookieprofilename').innerHTML = obj.profilename;
        let length = obj.links.length;
        if (length != 0){
            document.getElementById('profileinfo').innerHTML = "";
            for (let i = 0; i < length; i++){
                let linkentrytoappend = document.createElement('div');
                linkentrytoappend.innerHTML=obj.links[i];
                document.getElementById('profileinfo').append(linkentrytoappend);
            }
        }
    }
}

loadprofile();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('profilelinkadd').addEventListener('click', function() {
        addlinkentry();
    });
    document.getElementById('profilesave').addEventListener('click', function() {
        savedata();
    });
    document.getElementById('settings').addEventListener('click', function() {
        viewsettings();
    });
    document.getElementById('profilecard').addEventListener('click', function() {
        viewprofile();
        loadprofile();
    });
});