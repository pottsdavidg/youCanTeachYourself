export const q = {
    html: [
        {
            text: "What does HTML stand for?",
            ans: [
                { text: "HyperText Markup Language", value: true },
                { text: "How To Meet Ladies", value: false },
                { text: "Height Togglable Mixed Language", value: false },
                { text: "Honestly Twisted My Leg", value: false }
            ],
            section: "HTML"
        },
        {
            text: "Which of the following is an element?",
            ans: [
                { text: "&lt;div&gt;Hello, World&lt;/div&gt;", value: true },
                { text: "&lt;div class=&quot;left&quot;&lt;", value: false },
                { text: "&lt;div id=&quot;header&quot;&lt;", value: false },
                { text: "&lt;div&gt;", value: false }
            ],
            section: "HTML"
        },
        {
            text: "Which of the following is a tag?",
            ans: [
                { text: "&lt;div&gt;", value: true },
                { text: ".divider", value: false },
                { text: "class=&quot;header&quot;", value: false },
                { text: "&lt;!----&gt;", value: false }
            ],
            section: "HTML"
        },
        {
            text: "Which of the following is an attribute?",
            ans: [
                { text: "src", value: true },
                { text: "div", value: false },
                { text: "width", value: false },
                { text: "html", value: false }
            ],
            section: "HTML"
        },
        {
            text: "Which of these would you use to link an &lt;img&gt; to an image?",
            ans: [
                { text: "src", value: true },
                { text: "href", value: false },
                { text: "link", value: false },
                { text: "file", value: false }
            ],
            section: "HTML"
        }
    ],
    css: [
        {
            text: "What does CSS stand for?",
            ans: [
                { text: "Cascading Style Sheet", value: true },
                { text: "Cascading Syntax Sheet", value: false },
                { text: "Creative Syntax Styling", value: false },
                { text: "Creative Styling Sheet", value: false }
            ],
        section: "CSS"
        },
        {
            text: "What CSS property changes content horizontally using flexbox?",
            ans: [
                { text: "justify-content", value: true },
                { text: "align-items", value: false },
                { text: "text-align", value: false },
                { text: "text-decoration", value: false }
            ],
            section: "CSS"
        },
        {
            text: "Starting with the inner-most layer, how does content get rendered to the page?",
            ans: [
                { text: "Content, Padding, Border, Margin", value: true },
                { text: "Margin, Padding, Border, Content", value: false },
                { text: "Padding, Border, Content, Margin", value: false },
                { text: "Content, Margin, Padding, Border", value: false }
            ],
            section: "CSS"
        },
        {
            text: "What does using &quot;::after&quot; do?",
            ans: [
                { text: "Creates a psuedo-element after whatever is selected", value: true },
                { text: "Applies the styles after everything else", value: false },
                { text: "Delays when the styles are applied", value: false },
                { text: "Changes nothing, no one uses that", value: false }
            ],
            section: "CSS"
        },
        {
            text: "Why would someone use &quot;:hover&quot;?",
            ans: [
                { text: "To change the style when someone hovers over an element", value: true },
                { text: "To cause the selected element to hover over another element", value: false },
                { text: "To create a hover effect for the selected element", value: false },
                { text: "Stop asking me so many questions", value: false }
            ],
            section: "CSS"
        }
    ]
}