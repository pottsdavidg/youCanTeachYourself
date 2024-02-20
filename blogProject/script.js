const div = {
    open: "<div class=\"article\"><div class=\"ptitle\">blog.entry(post);</div><div class=\"pbody\"><span class=\"blue pbody-init\">let</span><span class=\"gray pbody-init\">post =</span><span class=\"lime pbody-text\">\"",
    close: "\"</span></div></div>"
};

function update(input) {
    let target = document.body.getElementsByClassName("blog-post");
    target.innerHTML += input;
    console.log("Body updated.");
};

function fetchPreviousPosts(n) {
    return n;
};