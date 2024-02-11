/*
Hard coding in the data like this is obviously unrealistic,
however I wanted to practice fetching data and using modules.
*/

export const data = {
    html: [
        {
            header: "<h2 id=\"html-section\">HTML Questions</h2>",
            qFieldset: ["<fieldset class=\"multiple-choice-container\">","</fieldset>"],
            qAnsDiv: ["<div class=\"answer-container\">", "</div>"],
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #1</h3>",
            qLegend: "<legend>What does HTML stand for?</legend>",
            qAnswer: [
                { content: "<label for=\"q0-o1\"><input type=\"radio\" id=\"q0-o1\" name=\"html1\" value=\"true\" />HyperText Markup Language</label>", value: true },
                { content: "<label for=\"q0-o2\"><input type=\"radio\" id=\"q0-o2\" name=\"html1\" value=\"false\" />How To Meet Ladies</label>", value: false },
                { content: "<label for=\"q0-o3\"><input type=\"radio\" id=\"q0-o3\" name=\"html1\" value=\"false\" />Height Togglable Mixed Language</label>", value: false },
                { content: "<label for=\"q0-o4\"><input type=\"radio\" id=\"q0-o4\" name=\"html1\" value=\"false\" />Honestly Twisted My Leg</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #2</h3>",
            qLegend: "<legend>Which of the following is an element?</legend>",
            qAnswer: [
                { content: "<label for=\"q1-o1\"><input type=\"radio\" id=\"q1-o1\" name=\"html2\" value=\"true\" />&lt;div&gt;Hello, World&lt;/div&gt;</label>", value: true },
                { content: "<label for=\"q1-o2\"><input type=\"radio\" id=\"q1-o2\" name=\"html2\" value=\"false\" />&lt;div class=&quot;left&quot;&gt;</label>", value: false },
                { content: "<label for=\"q1-o3\"><input type=\"radio\" id=\"q1-o3\" name=\"html2\" value=\"false\" />&lt;div id=&quot;header&quot;&gt;</label>", value: false },
                { content: "<label for=\"q1-o4\"><input type=\"radio\" id=\"q1-o4\" name=\"html2\" value=\"false\" />&lt;div&gt;</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #3</h3>",
            qLegend: "<legend>Which of the following is a tag?</legend>",
            qAnswer: [
                { content: "<label for=\"q2-o1\"><input type=\"radio\" id=\"q2-o1\" name=\"html3\" value=\"true\" />&lt;div&gt;</label>", value: true },
                { content: "<label for=\"q2-o2\"><input type=\"radio\" id=\"q2-o2\" name=\"html3\" value=\"false\" />.divider</label>", value: false },
                { content: "<label for=\"q2-o3\"><input type=\"radio\" id=\"q2-o3\" name=\"html3\" value=\"false\" />class=&quot;header&quot;</label>", value: false },
                { content: "<label for=\"q2-o4\"><input type=\"radio\" id=\"q2-o4\" name=\"html3\" value=\"false\" />&lt;!----&gt;</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #4</h3>",
            qLegend: "<legend>Which of the following is an attribute?</legend>",
            qAnswer: [
                { content: "<label for=\"q3-o1\"><input type=\"radio\" id=\"q3-o1\" name=\"html4\" value=\"true\" />src</label>", value: true },
                { content: "<label for=\"q3-o2\"><input type=\"radio\" id=\"q3-o2\" name=\"html4\" value=\"false\" />div</label>", value: false },
                { content: "<label for=\"q3-o3\"><input type=\"radio\" id=\"q3-o3\" name=\"html4\" value=\"false\" />width</label>", value: false },
                { content: "<label for=\"q3-o4\"><input type=\"radio\" id=\"q3-o4\" name=\"html4\" value=\"false\" />html</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 id=\"css-section\" class=\"question-number\">Question #5</h3>",
            qLegend: "<legend>Which of these would you use to link an &lt;img&gt; to an image?</legend>",
            qAnswer: [
                { content: "<label for=\"q4-o1\"><input type=\"radio\" id=\"q4-o1\" name=\"html5\" value=\"true\" />src=&quot;image.svg&quot;</label>", value: true },
                { content: "<label for=\"q4-o2\"><input type=\"radio\" id=\"q4-o2\" name=\"html5\" value=\"false\" />href=&quot;image.svg&quot;</label>", value: false },
                { content: "<label for=\"q4-o3\"><input type=\"radio\" id=\"q4-o3\" name=\"html5\" value=\"false\" />link=&quot;image.svg&quot;</label>", value: false },
                { content: "<label for=\"q4-o4\"><input type=\"radio\" id=\"q4-o4\" name=\"html5\" value=\"false\" />file=&quot;image.svg&quot;</label>", value: false }
            ]
        }
    ],
    css: [
        {
            header: "<h2 id=\"css-section\">CSS Questions</h2>",
            qFieldset: ["<fieldset class=\"multiple-choice-container\">","</fieldset>"],
            qAnsDiv: ["<div class=\"answer-container\">", "</div>"]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #1</h3>",
            qLegend: "<legend>What does CSS stand for?</legend>",
            qAnswer: [
                { content: "<label for=\"q5-o1\"><input type=\"radio\" id=\"q5-o1\" name=\"css1\" value=\"true\" />Cascading Style Sheet</label>", value: true },
                { content: "<label for=\"q5-o2\"><input type=\"radio\" id=\"q5-o2\" name=\"css1\" value=\"false\" />Cascading Syntax Sheet</label>", value: false },
                { content: "<label for=\"q5-o3\"><input type=\"radio\" id=\"q5-o3\" name=\"css1\" value=\"false\" />Creative Syntax Styling</label>", value: false },
                { content: "<label for=\"q5-o4\"><input type=\"radio\" id=\"q5-o4\" name=\"css1\" value=\"false\" />Creative Styling Sheet</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #2</h3>",
            qLegend: "<legend>What CSS property changes content horizontally using flexbox?</legend>",
            qAnswer: [
                { content: "<label for=\"q6-o1\"><input type=\"radio\" id=\"q6-o1\" name=\"css2\" value=\"true\" />justify-content</label>", value: true },
                { content: "<label for=\"q6-o2\"><input type=\"radio\" id=\"q6-o2\" name=\"css2\" value=\"false\" />align-items</label>", value: false },
                { content: "<label for=\"q6-o3\"><input type=\"radio\" id=\"q6-o3\" name=\"css2\" value=\"false\" />content-align</label>", value: false },
                { content: "<label for=\"q6-o4\"><input type=\"radio\" id=\"q6-o4\" name=\"css2\" value=\"false\" />text-align</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #3</h3>",
            qLegend: "<legend>Starting with the inner-most layer, how does content get rendered to the page?</legend>",
            qAnswer: [
                { content: "<label for=\"q7-o1\"><input type=\"radio\" id=\"q7-o1\" name=\"css3\" value=\"true\" />Content, Padding, Border, Margin</label>", value: true },
                { content: "<label for=\"q7-o2\"><input type=\"radio\" id=\"q7-o2\" name=\"css3\" value=\"false\" />Margin, Padding, Border, Content</label>", value: false },
                { content: "<label for=\"q7-o3\"><input type=\"radio\" id=\"q7-o3\" name=\"css3\" value=\"false\" />Padding, Border, Content, Margin</label>", value: false },
                { content: "<label for=\"q7-o4\"><input type=\"radio\" id=\"q7-o4\" name=\"css3\" value=\"false\" />Content, Margin, Padding, Border</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #4</h3>",
            qLegend: "<legend>What does using &quot;::after&quot; do?</legend>",
            qAnswer: [
                { content: "<label for=\"q8-o1\"><input type=\"radio\" id=\"q8-o1\" name=\"css4\" value=\"true\" />Creates a psuedo-element after whatever is selected</label>", value: true },
                { content: "<label for=\"q8-o2\"><input type=\"radio\" id=\"q8-o2\" name=\"css4\" value=\"false\" />Applies the styles after everything else</label>", value: false },
                { content: "<label for=\"q8-o3\"><input type=\"radio\" id=\"q8-o3\" name=\"css4\" value=\"false\" />Delays when the styles are applied</label>", value: false },
                { content: "<label for=\"q8-o4\"><input type=\"radio\" id=\"q8-o4\" name=\"css4\" value=\"false\" />Changes nothing, no one uses that</label>", value: false }
            ]
        },
        {
            qNumber: "<h3 class=\"question-number\">Question #5</h3>",
            qLegend: "<legend>Why would someone use &quot;:hover&quot;?</legend>",
            qAnswer: [
                { content: "<label for=\"q9-o1\"><input type=\"radio\" id=\"q9-o1\" name=\"css5\" value=\"true\" />To change the style when someone hovers over an element</label>", value: true },
                { content: "<label for=\"q9-o2\"><input type=\"radio\" id=\"q9-o2\" name=\"css5\" value=\"false\" />To cause the selected element to hover over another element</label>", value: false },
                { content: "<label for=\"q9-o3\"><input type=\"radio\" id=\"q9-o3\" name=\"css5\" value=\"false\" />To create a hover effect for the selected element</label>", value: false },
                { content: "<label for=\"q9-o4\"><input type=\"radio\" id=\"q9-o4\" name=\"css5\" value=\"false\" />Stop asking me so many questions</label>", value: false }
            ]
        }
    ]
}