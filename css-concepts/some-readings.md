article: CSS units: em, rem, and px

>> em is a relative unit that refers to the font-size of the parent’s element
    >> if a parent’s font-size is 16px, then 1em would be 16px and 2em would be 32px
    >> An important thing to realize with em is that if the font-size of an element changes, so does the value of em
    >> So, if you set some element’s font size to 2em, and one of its children is also 2em, the calculated value of those 2 font-sizes will not be the same, child will be double its parent size

>> rem is very similar to an em except that instead of always referring to an element’s parent, it always refers to the font size of the root HTML element
    >> So, in the previous example, if a parent and child both get 2rem, the calculated value will be the same

>> implications: for using relative units: 
    >> One of the main reasons anyone would want to use a relative unit instead of the more absolute px is accessibility
    >> Many users, for various reasons, change the default font-size of their browser to improve readablility
    >> Lengths that are defined in either em or rem will change, while px values will remain static
    >> So, if you want your users to be able to boost the font-size of their browser, and have that affect your website you should use either em or rem
    >> This does not mean, however, that it would be advisable to encode every length as a relative unit
    >> With zooming, even absolute px values will scale, for this reason, one convincing (though slightly dated) stack-overflow answer suggests that using relative units is not worth the effort but newer response suggests opposite
    >> Typically zooming in will emulate using a smaller screen, so if you zoom in enough, the browser will trigger your media-queries and display the mobile version of the site

>> suggestions:  use rem for font-size and px for everything else (opionionated)
    >> em is more confusing than it’s really worth and can lead to confusing size-related bugs (opinionated)
    >> If the option is there, we should code in such a way that respects the user’s wishes, so at least for font-size I recommend using rem over em, as em gets confusing and leads to size related bugs
    >> However, the decision to use rem or px for things like margin and padding comes down to design preference
    >> One possible issue with using px and rem together is that the scaling could break some layouts
    >> This depends on how you set things up, but if (for example) your header layout will break if the text within it overflows or wraps to a second line, you might not want to use this option
        >> In this situation, my first recommendation is to do your best to make your layouts flexible enough to accommodate things like text wrapping and overflows
        >> If this isn’t possible, then it might be better to simply use px for everything
    >> Your font sizes will not change with respect to the user’s settings, but they will still be able to use their browser’s zoom feature, which will only break layouts if you have not done any responsive styling

>> concluding remarks: 
    >> If you’re using rem for fonts, then I slightly prefer using pixels for elements such as margin and padding, but there is nothing wrong with using rem for that
    >> In either case, it is important to consider these details and make a conscious decision either way. Applying these concepts in a haphazard fashion is likely to make your site unresponsive and difficult for users that rely on assistive technology



article: Fun with Viewport Units
>> vw, vh, vmin, and vmax – work similarly to existing length units like px or em, but represent a percentage of the current browser viewport
    >> Viewport Width (vw): 
        >> A percentage of the full viewport width
        >> 10vw will resolve to 10% of the current viewport width, or 48px on a phone that is 480px wide
        >> difference between % and vw is most similar to the difference between em and rem
        >> A % length is relative to local context (containing element) width, while a vw length is relative to the full width of the browser window
    >> Viewport Height (vh): 
        >> A percentage of the full viewport height
        >> 10vh will resolve to 10% of the current viewport height
    >> Viewport Minimum (vmin): 
        >> A percentage of the viewport width or height, whichever is smaller
        >> 10vmin will resolve to 10% of the current viewport width in portrait orientations, and 10% of the viewport height on landscape orientations
    >> Viewport Maximum (vmax): 
        >> A percentage of the viewport width or height, whichever is larger
        >> 10vmax will resolve to 10% of the current viewport height in portrait orientations, and 10% of the viewport width on landscape orientations
>> While these units are derived from viewport height or width, they can all be used everywhere lengths are accepted – from font-size to positioning, margins, padding, shadows, borders, and so on

>> Responsive Typography: 
    >> It’s become very popular to use viewport units for responsive typography – establishing font-sizes that grow and shrink depending on the current viewport size
    >> Using simple viewport units for font-size has an interesting (dangerous) effect, it could very quickly become extra large to extra small depending on viewport
    >> This direct scaling is clearly too dramatic for daily use, we need something more subtle, with minimums and maximums, and more control of the growth rate
    >> That’s where calc() becomes useful
    >> We can combine a base size in more steady units (say 16px) with a smaller viewport-relative adjustment (0.5vw), and let the browser do the math: calc(16px + 0.5vw)
    >> By changing the relationship between your base-size and viewport-relative adjustment, you can change how dramatic the growth-rate is
    >> This allows for a more dynamic typographic scale on larger screens, while keeping fonts constrained on a mobile device – no media-queries required
    >> You can also apply this technique to your line-height, allowing you to adjust leading at a different rate than the font-size
            <
                body {
                    // font grows 1px for every 100px of viewport width
                    font-size: calc(16px + 1vw);
                    // leading grows along with font,
                    // with an additional 0.1em + 0.5px per 100px of the viewport
                    line-height: calc(1.1em + 0.5vw);
                }

>> Full-Height Layouts, Hero Images, and Sticky Footers:
    >> In a desktop-style full-height interface, the page is often broken into sections that scroll individually – with elements like headers, footers, and sidebars that remains in place at any size
    >> This is common practice for many web-apps these days, and vh units make it much simpler
    >> A single declaration on the body element, height: 100vh, constrains your application to the height of the viewport
    >> Make sure you apply overflow values on internal elements, so your content isn’t cut off
    >> Sticky Footers: can be created with a similar technique: 
        >> Change your body height: 100vh to min-height: 100vh and the footer will stay in place at the bottom of your screen until it’s pushed down by content
    >> Apply vh units to the height, min-height, or max-height of various elements to create full-screen sections, hero images, and more

>> Fluid Aspect Ratios: 
    >> It can also be useful to constrain the height-to-width ratio of an element
    >> This is especially useful for embeded content, like videos
    >> If we can count on the video being full-screen, we can set our height relative to the full viewport width:
        >>
        /* full-width * aspect-ratio */
            .full-width {
            width: 100vw;
            height: calc(100vw * (9/16));
            }
        >> That math doesn’t have to happen in the browser with calc
        >> If you are using a pre-processor like Sass, it will work just as well to do the math there: height: 100vw * (9/16)
        >> If you need to constrain the max-width, you can constrain the max-height as well:
        /* max-width * aspect-ratio */
            .full-width {
            width: 100vw;
            max-width: 30em;
            height: calc(100vw * (9/16));
            max-height: calc(30em * (9/16));
            }
        >> We can set all our internal fonts and sizes using the same viewport units as the container
        >> by using  vmin for everything, so the content would scale with changes in both container height and width

>> Breaking the Container: 
    >> For years now, it’s been popular to mix constrained text with full-width backgrounds
    >> Again, viewport units can come in handy
    >> a static-site generator sometimes limits our control of the markup
    >> It only takes a few lines of code to make this work
    .full-width {
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
    }
        