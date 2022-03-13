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
    console.log(linkamount);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('profilelinkadd').addEventListener('click', function() {
        addlinkentry();
    });
});