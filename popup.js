document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");

    registerBtn.addEventListener("click", function () {
        const courseName = "DATA STRUCTURES";
        const courseId = "CO201";

        chrome.runtime.sendMessage({
            action: "startApplying",
            courseName: courseName,
            courseId: courseId,
        });
    });

    stopBtn.addEventListener("click", function () {
        chrome.runtime.sendMessage({
            action: "stopApplying",
        });
    });
});