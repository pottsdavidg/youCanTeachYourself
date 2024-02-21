import d from "./post.json";
export let app = {
    
    HTML: {
        post: {
            op: "<div class=\"article\"><div class=\"ptitle\">blog.entry(post);</div><div class=\"pbody\"><span class=\"blue pbody-init\">let</span><span class=\"gray pbody-init\">post =</span><span class=\"lime pbody-text\">\"",
            cl: "\"</span></div>",
            cd: [
                "<div class=\"crud-container\"><button id=\"edit\" data-editPostID=\"",
                "\"><img src=\"./img/edit.png\" /> edit </button><div class=\"post-identifier\">",
                "</div><button id=\"delete\" data-deletePostID=\"",
                "\"><img src=\"./img/delete.png\" /> delete </button></div></div>"
            ]
        },
        create: {
            op:"<textarea id=\"post-textbox\">",
            cl:"</textarea><button id=\"submit-post\"><img src=\"./img/submit.png\" alt=\"submit icon\" /> submit</button>"
        }
    },

    loadCalls: 0,

    fetchPrevious: (n) => {
        this.loadCalls += 1;
        if (Object.keys(d.posts).length <= n) {
            let output = "";
            let p = app.HTML.post;
            Object.keys(d.posts).forEach(key => {
                let body = p.op + d.posts[`${key}`] + p.cl;
                let crud = "";
                p.cd.forEach(value => {
                    crud += value;
                    if (value != p.cd[3]) crud += key;
                });
                output += body + crud;
            });
        };
    },
    
    createPost: (post) => {

    },

    editPost: (post) => {

    },

    deletePost: (post) => {

    },

    init: () => {
        
    }

}