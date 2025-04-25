function menubar() {
    var menu = document.getElementById("mytopnav");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleFaq(index) {
    const faqContents = document.querySelectorAll('.faq-content');
    const inquiry = document.querySelector('.inquriy');

    
    let expanded = false;

    faqContents.forEach((content, i) => {
        if (i === index) {
            if (content.style.display === 'block') {
                content.style.display = 'none'
            }
            else {
                content.style.display = 'block'
                expanded = true;
            }
        }
        else {
            content.style.display = 'none';
        }
    });
}

const inquiryForm = document.getElementById('inquiryform');

inquiryForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const name = inquiryForm.elements['name'].value;
    const email = inquiryForm.elements['email'].value;
    const msg = inquiryForm.elements['msg'].value;

    if (!name) {
        alert('Name cannot be left blank');
        return;
    }

    if (!email) {
        alert('Email cannot be left blank');
        return;
    }

    if (!msg || msg.length < 20) {
        alert('Message cannot be left blank and should be at least 20 characters');
        return;
    } else {
        alert("Thank you! Your message has been sent.");
    }

});

const contactform = document.getElementById('inquiryform');

contactform.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const name = contactform.elements['name'].value;
    const email = contactform.elements['email'].value;
    const msg = contactform.elements['msg'].value;

    if (!name) {
        alert('Name cannot be left blank');
        return;
    }

    if (!email) {
        alert('Email cannot be left blank');
        return;
    }

    if (!msg || msg.length < 20) {
        alert('Message cannot be left blank and should be at least 20 characters');
        return;
    } else {
        alert("Thank you! Your message has been sent.");
    }

});









