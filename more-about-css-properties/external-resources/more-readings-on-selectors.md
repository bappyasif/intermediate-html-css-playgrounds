Specificity: 
>> specificity calculation: specificity represented as four comma separated values (e.g. 1,1,1,1 or 0,2,0,1)
    >> first digit is always zero, unless there is a style attribute applied to that element within the markup itself
    >> second digit is the sum of the number of IDs in that selector
    >> third digit is the sum of other attribute selectors and pseudo-classes in that selector (e.g. .example, li[id=red])
    >> fourth digit counts the elements (like table, p, div, etc.) and pseudo-elements (like :first-line)
    >> universal selector (*) has a specificity of zero
    >> If two selectors have the same specificity, the one that comes last on the stylesheet will be applied
    >> example: 
        #sidebar h2 — 0, 1, 0, 1
        h2.title — 0, 0, 1, 1
        h2 + p — 0, 0, 0, 2
        #sidebar p:first-line — 0, 1, 0, 2

Selectors: 

>> Attribute Selectors: 
    >> Attribute selectors let you target an element based on its attributes
    >> target elements that have particular values on their attributes
    >> There are 6 different types of attribute selectors: 
        >> [att=value]: attribute has to have the exact value specified
        >> [att~=value]: attribute’s value needs to be a whitespace separated list of words (for example, class=“title featured home”), and one of the words is exactly the specified value
        >> [att|=value]: attribute’s value is exactly “value” or starts with the word “value” and is immediately followed by “-”, or in other words value is hyphanated
        >> [att^=value]: attribute’s value starts with the specified value
        >> [att$=value]: attribute’s value ends with the specified value
        >> [att*=value]: attribute’s value contains the specified value, anywhere in that value string
    >> some probable use cases: 
        >> to change the background color of all the div elements that are posts, div[class*="post"] {background-color: #333; }
        >> to target different types of input elements, input[type="text"] { width: 200px; }
        >> to add a different icon next to each different type of file your website is linking to, that will target all the links (a) whose href attribute ends ($) with .jpg, .pdf or .doc,
            a[href$=".jpg"] {
                background: url(jpeg.gif) no-repeat left 50%;
                padding: 2px 0 2px 20px;
            }

            a[href$=".pdf"] {
                background: url(pdf.gif) no-repeat left 50%;
                padding: 2px 0 2px 20px;
            }

            a[href$=".doc"] {
                background: url(word.gif) no-repeat left 50%;
                padding: 2px 0 2px 20px;
            }

>> Child Selector: is represented by the sign “>”
    >> It allows you to target elements that are direct children of a particular element, div#sidebar > h2 { font-size: 20px; }
    >> You can also use both child and descendant selectors combined, body > div > div blockquote { margin-left: 30px; }

>> Sibling Combinators: There are two types of sibling combinators: adjancent sibling combinators and general sibling combinators:
    >> Adjacent sibling combinator: uses the plus sign, “+”, to combine two sequences of simple selectors: 
        >> elements in the selector have the same parent, and the second one must come immediately after the first
        >> adjacent sibling combinator can be very useful, for example, when dealing with text
        >> examples 
            >> to add a top margin to all the h2 tags that follow a paragraph,  p + h2 { margin-top: 10px; }
            >> You can be even more specific and direct this to sepcefic div instead, div.post p + h2 { margin-top: 10px; }
            >> Or you can add another level of complexity: first line of the paragraphs of every page to be in small caps, .post h1 + p:first-line { font-variant: small-caps; }
    
    >> General sibling combinator: 
        >> second selector doesn’t have to immediately follow the first one, as it wouldin adjacent sibling combinator
        >> example: So if you need to target all the p tags that are within a particular div and that follow the h1 tag, .post h1 ~ p { font-size: 13px; }

>> Pseudo classes: 
    >> Dynamic psuedo classes: 
        >> These are called dynamic pseudo-classes because they actually do not exist within the HTML
        >> they are only present when the user is or has interacted with the website
        >> There are two types of dynamic pseudo-classes: link and user action ones
            >> link are :link and :visited
            >>  user action ones are :hover, :active and :focus
        >> You can use more than one user action dynamic pseudo-class in your stylesheets,
            input:focus {
                background: #D2D2D2;
                border: 1px solid #5E5E5E;
            }

            input:focus:hover {
                background: #C7C7C7;
            }

:first-child: 
    >> this allows you to target an element that is the first child of another element
    >> examples: 
        >> if you want to add a top margin to the first li element of your unordered lists, ul > li:first-child { margin-top: 10px; }
        >> if you want all your h2 tags in your sidebar to have a top margin, to separate them from whatever comes before them, but the first one doesn’t need a margin, 
            #sidebar > h2 {
                margin-top: 10px;
            }

            #sidebar > h2:first-child {
                margin-top: 0;
            }

Language pseudo classes: :lagn()
    >> this allows you to match an element based on its language
    >> example: if you want a specific link on your site to have a different background color, depending on that page’s language, 
        :lang(en) > a#flag {
            background-image: url(english.gif);
        }

        :lang(fr) > a#flag {
            background-image: url(french.gif);
        }


Css 3 Pseudo clases: 

>> :target: 
    >> When you’re using links with fragment identifiers (for example, https://www.smashingmagazine.com/2009/08/02/bauhaus-ninety-years-of-inspiration/#comments, where “#comments” is the fragment identifier), you can style the target by using the :target pseudo-class
    >> example: for the user if, when clicking on a particular link within the index, that heading would become highlighted in some way, when the page scrolls down, h2:target { background: #F2EBD6; }

>> UI element states pseudo classes: 
    >> These states can be targeted by the :enabled, :disabled or :checked
    >> examples: 
        >> So you can say that any input that is disabled should have a light grey background and dotted border, input:disabled { border:1px dotted #999; background:#F2F2F2; }
        >> You can also say that all checkboxes that are checked should have a left margin, 
            input[type=”checkbox”]:checked { margin-left: 15px; }

CSS 3 structural pseudo classes: 

>> :nth-child 
    >> allows you to target one or more specific children of a parent element
    >> examples: 
        >> You can target a single child, by defining its value as an integer:, ul li:nth-child(3) { color: red; }
        >> You can target a parent’s children using expressions, following expression will match every third li element starting from the fourth, ul li:nth-child(3n+4) { color: yellow; }
        >> If you just want to start counting from the first li element, and repeat pattern after that, ul li:nth-child(3n) { color: yellow; }
        >> if you want to target only the first four li elements within the list, ul li:nth-child(-n+4) { color: green; }
    >> value of :nth-child can also be defined as “even” or “odd”, which are the same as using “2n” (every second child) or “2n+1”

>> :nth-last-child 
    >> works similar to nith-child except, it starts counting the elements from the last one
    >> You can also use the values “even” or “odd”, with the difference that in this case they will count the children starting from the last one, ul li:nth-last-child(odd) { color: grey; }

>> :nth-of-type
    >> works similarly as nth-child, with differntce is that it only counts children that match the element in the selector
    >> This can be very useful if we want to target elements that may contain different elements within them
    >> example: to turn every second paragraph in a block of text blue, but we want to ignore other elements,       p:nth-of-type(even) { color: blue; }

>> :nth-last-of-type
    >> can be used exactly as :nth-last-child, but here it will nly target the elements that match our selector
    >> examples: 
        >> ul li:nth-last-of-type(-n+4) { color: green; }
        >> we can also combine more than one of these pseudo-classes together on a massive selector, .post img:nth-of-type(n+2):nth-last-of-type(n+2) { float: left; }

>> :last-child
    >> :last-child pseudo-class works just as the :first-child pseudo-class, but instead targets the last child of a parent element
    >> example: say, if you don’t want the last paragraph within your post div to have a bottom margin, .post > p:last-child { margin-bottom: 0; }

>> :first-of-type and :last-of-type
    >> :first-of-type pseudo-class is used to target an element that is the first of its type within its parent
    >> :last-of-type pseudo-class works exactly the same, but targets the last child of its type instead
    >> example: you can target the first paragraph that is a direct child of a particular div, and capitalize its first line, .post > p:first-of-type:first-line { font-variant: small-caps; }

>> :only-child
    >> it represents an element that is the only child of its parent
    >> example, say when you have more than one paragraph, you want the text to be smaller than when you have only one, div.news > p { font-size: 1.2em; }
    div.news > p:only-child { font-size: 1.5em; }
    >> In first selector, we are defining the overall size of the p elements that are direct children of a “news” div
    >> On second one, we are overriding the previous font-size by saying, if the p element is the only child of the “news” div, its font size should be bigger

>> :only-of-type
    >> represents an element that is the only child of its parent with the same element
    >> example: if you want the image within the later ones to be aligned to the center, while the images on posts with more than one image to be floated, .post > img { float: left; }
    .post > img:only-of-type { float: none; margin: auto; }

>> :empty
    >> represents an element that has no content within it
    >> example use cases: 
        >> if you have multiple boxes in your “sidebar” div, but don’t want the empty ones to appear on the page, #sidebar .box:empty { display: none; }


Negation Pseudo-Class: denoted by :not() 
    >> lets you target elements that do not match the selector that is represented by its argument
    >> examples: 
        >> this can be useful if you need to style all the input elements within a form, but you don’t want your input elements with the type submit to be styled, input:not([type="submit"]) {
        width: 200px; padding: 3px; border: 1px solid #000000; }
        >> say, you want all the paragraphs within your post div to have a larger font-size, except for the one that indicates the time and date, .post p:not(.date) { font-size: 13px; }


Pseudo elements: should be denoted with '::'
>> allows you to access elements that don’t actually exist in the HTML

>> :first-line
    >> will match the first line of a block, inline-block, table-caption or table-cell level element
    >> This is particularly useful to add subtle typographical details to your text blocks
    >> example:
        >> to transforming the first line of an article into small caps, h1 + p::first-line { font-variant: small-caps; }
        >> You could also refer to the first line of a particular div, without having to refer to the actual paragraph tag, div.post p::first-line { font-variant: small-caps; }
        >> Or go one step farther and target specifically the first paragraph within a particular div, div.post > p:first-child::first-line { font-variant: small-caps; }

>> :first-letter
    >> will match the first letter of a block, unless it’s preceded by some other content, like an image, on the same line
    >> :first-letter is commonly used to add typographical details to text elements, like drop caps or initials
    >> example: p { font-size: 12px; }  p::first-letter { font-size: 24px; float: left; }
    >> if you use both ::first-line and ::first-letter in the same element, the ::first-letter properties will override the same properties inherited from ::first-line

>> ::before and ::after
    >> these two elements are used to insert content before or after an element’s content, purely via CSS
    >> These elements will inherit many of the properties of the elements that they are being attached to
    >> example: 
        >> say, you want to the words “Graphic number x:” before the descriptions of graphs and charts on your page, .post { counter-reset: image; }
        p.description::before { content: "Figure number " counter(image) ": "; counter-increment: image; }
        >> First, we tell the HTML to create the “image” counter
        >> Then we say that we want to add, before every paragraph with the class “description”, this piece of content: “Figure number ” 
        >> After that, we have counter(image)
        >> next property is there so that the counter knows that for each p.description, it needs to increment the image counter by 1 (counter-increment: image)
    >> :before and ::after pseudo-elements are often only used with the content property, to add small sentences or typographical elements, but here it’s shown how we can use it in a more powerful way in conjunction with the counter-reset and counter-increment properties
    >> ::first-line and ::first-letter pseudo-elements will match the content added by the ::before pseudo-element, if present


