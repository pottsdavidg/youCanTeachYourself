const fs = require('fs');
const DATA = fs.readFileSync('post.json');
const d = JSON.parse(DATA);
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
    
        const pTOTAL = Object.keys(d.posts).length;
        this.loadCalls++;
        if (pTOTAL <= n) n = pTOTAL;
        if (pTOTAL < (n * this.loadCalls)) return null;

        let output = "";
        let p = app.HTML.post;
        
        for (let i = pTOTAL; i > (pTOTAL - (n * this.loadCalls)); i--) {
            let key = Object.keys(d.posts)[i - 1]
            let body = p.op + d.posts[`${key}`] + p.cl;
            let crud = "";
            p.cd.forEach(value => {
                crud += value;
                if (value != p.cd[3]) crud += key;
            });
            output += body + crud;
        };
        
        return output;
    
    },
    
    createPost: () => {
        let pID = parseInt(Object.keys(d.posts)[Object.keys(d.posts).length - 1], 16) + 1;
        pID = pID.toString(16);
        return [app.HTML.create.op + app.HTML.create.cl, pID];
    },

    editPost: (post) => {
        const ID = post.dataset.editPostID;
        return app.HTML.create.op + d.posts[ID] + app.HTML.create.cl;
    },

    submitPost: (content, postID) => {
        d.posts[postID] = content;
        const updatedData = JSON.stringify(d);
        fs.writeFileSync('post.json', updatedData);
        app.init();
    },

    deletePost: (post) => {
        const ID = post.dataset.deletePostID;
        d.archive[ID] = d.posts[ID];
        delete d.posts[ID];
        app.init();
    },

    init: () => {
        app.loadCalls = 0;
        return fetchPrevious(3);
    }

}