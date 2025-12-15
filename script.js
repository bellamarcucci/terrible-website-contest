
// Function to blink the title bar text
(function cycleTitle() {
    const titles = [
        "Customer Support Nightmare",
        "Please don't leave...",
        "Your ticket is almost being ignored",
        "Are you still there?"
    ];
    let index = 0;
    setInterval(function () {
        document.title = titles[index % titles.length];
        index++;
    }, 500);
})();

// Exit Popup after scrolling 300px
let exitPopupShown = false;
window.addEventListener("scroll", function () {
    if (!exitPopupShown && window.scrollY > 300) {
        const popup = document.getElementById("exitPopup");
        if (popup) {
            popup.classList.remove("hidden");
            exitPopupShown = true;
        }
    }
});

// Exit Popup buttons
const stayButton = document.getElementById("stayButton");
const leaveButton = document.getElementById("leaveButton");

if (stayButton) {
    stayButton.addEventListener("click", function () {
        const popup = document.getElementById("exitPopup");
        if (popup) popup.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

if (leaveButton) {
    leaveButton.addEventListener("click", function () {
        // refresh the page to simulate leaving
        location.reload();
    });
}

// Floatng banner close button
const bannerClose = document.getElementById("bannerClose");
if (bannerClose) {
    bannerClose.addEventListener("click", function () {
        bannerClose.parentElement.style.display = "none";
    });
}

// Form submission handling 327 characters and terms checkbox
const form = document.getElementById("nightmareForm");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const description = document.getElementById("description");
        const terms = document.getElementById("termsCheckbox");

        const descriptionLength = description.value.trim().length;

        if (!terms.checked) {
            alert("You must confirm that you have read ALL 987 pages of the terms.");
            return;
        }

        if (descriptionLength !== 327) {
            alert(
                "Your description is " +
                descriptionLength +
                " characters long. It must be EXACTLY 327 characters.\n\n" +
                "Your progress will now be reset for your convenience."
            );
            form.reset();
            return;
        }

        
        alert("Thank you! Your ticket has been placed in an infinite queue.");
        form.reset();
    });
}

// fake submit button
const fakeSubmit = document.getElementById("fakeSubmit");
if (fakeSubmit) {
    fakeSubmit.addEventListener("click", function () {
        alert(
            "This is not the real submit button.\n" +
            "But we appreciate your enthusiasm."
        );
    });
}

const fakeCtaTop = document.getElementById("fakeCtaTop");
if (fakeCtaTop) {
    fakeCtaTop.addEventListener("click", function () {
        alert("Instant help is temporarily unavailable. Please try again never.");
    });
}

const fakeChat = document.getElementById("fakeChat");
const fakeChatWidget = document.getElementById("fakeChatWidget");
const fakeChatClose = document.getElementById("fakeChatClose");
const floatingChatButton = document.getElementById("floatingChatButton");

function openFakeChat() {
    if (fakeChatWidget) {
        fakeChatWidget.style.display = "block";
    }
}

function closeFakeChat() {
    if (fakeChatWidget) {
        fakeChatWidget.style.display = "none";
    }
}

if (fakeChat) {
    fakeChat.addEventListener("click", function () {
        openFakeChat();
    });
}

if (floatingChatButton) {
    floatingChatButton.addEventListener("click", function () {
        openFakeChat();
    });
}

if (fakeChatClose) {
    fakeChatClose.addEventListener("click", function () {
        closeFakeChat();
    });
}

// Cookie banner buttons
const cookieBanner = document.getElementById("cookieBanner");
const cookieAcceptTiny = document.getElementById("cookieAcceptTiny");
const cookieAcceptBig = document.getElementById("cookieAcceptBig");

if (cookieAcceptTiny && cookieBanner) {
    cookieAcceptTiny.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });
}

if (cookieAcceptBig) {
    cookieAcceptBig.addEventListener("click", function () {
        alert("Thank you for accepting absolutely everything. Nothing has changed.");
    });
}
