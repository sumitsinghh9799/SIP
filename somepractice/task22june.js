function startDownload(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000); 
}

function downloading(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000); 
}

function downloadCompleted() {
    console.log("Download Completed!");
}

startDownload(function () {
    downloading(function () {
        downloadCompleted();
    });
});

// ques2

function downloadFile(url, callback) {
console.log("Starting download...");

setTimeout(() => {
console.log("Download completed");
callback();
}, 2000);
}

downloadFile("pdf", () => {
console.log("Opening file...");
});

// ques 3

function login(callback) {
setTimeout(() => {
console.log("User authenticated");
callback();
}, 1000);
}
function getProfile(callback) {
setTimeout(() => {
console.log("Profile fetched");
callback();
}, 1000);
}
login(() => {
getProfile(() => {
console.log("Displaying profile");
});
});

// ques5
function download(cb) {
setTimeout(() => {
console.log("Download Complete");
cb();
}, 1000);
}
function compress(cb) {
setTimeout(() => {
console.log("Compression Complete");
cb();
}, 1000);
}
function upload(cb) {
setTimeout(() => {
console.log("Upload Complete");
cb();
}, 1000);
}
console.log("Start Download");
download(() => {
console.log("Compressing File");
compress(() => {
console.log("Uploading File");
upload(() => {
console.log("Process Finished");
});
});
});

