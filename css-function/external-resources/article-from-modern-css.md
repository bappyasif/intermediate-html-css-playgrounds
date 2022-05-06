calc(): 
> Practical purpose of calc(): performing basic math operations, with the ability to interpolate between unit types (ex. rem to vw)
> benefit of calc() is in allowing you to avoid either hard-coding a range of magic numbers or adding a JavaScript solution to calculate the value needed to apply it as an inline style

clamp(): 
> Practical purpose of clamp(): setting boundaries on a range of acceptable values
> clamp() function takes three values, and order matters
> first is the lowest value in your range, the middle is your ideal value, and the third is the highest value in your range
> one of use of clamp() is for fluid typography
> essential concept is that the font-size value can fluidly adjust based on the viewport size
> This is intended to prevent large headlines triggering overflow, or taking up too much of the viewport
> A very basic definition for a fluid h1 style: `h1 { font-size: clamp(1.75rem, 4vw + 1rem, 3rem); }`
> most significant benefit here versus media queries is that since this padding definition is element relative, it will be larger when the element has more space on the page and smaller if, for example, it's placed in a narrow column

min(): 
> Practical purpose of min(): setting boundaries on the maximum allowed value in a way that encompasses the responsive context of an element
> despite being the min() function, the outcome is that the provided values will act as a maximum allowed value for the property
> Given width: min(80ch, 100vw), the outcome is that on a larger viewport, the 80ch will be selected because it is the smaller value of the two options, yet it acts like a maximum based on contextually available space
> Once the viewport shrinks, 100vw will be used because it is computed as smaller than 80ch, yet it's actually providing a maximum boundary for the element's width
<!-- Modern CSS .container Class -->
> min() function allows nested basic math operations, which means we can flip to subtracting some space as a swap for defining left and right padding, as follows: `.container { width: min(80ch, 100vw - 2rem); }`
> On larger viewports, the element can grow to a max of 80ch, and once the viewport shrinks below that width, it will be allowed to grow to 100vw - 2rem
> This definition effectively produces 1rem of "padding" on either side of the element
> ch unit is equal to the width of the 0 character given all current font properties at the time it is applied
> this makes it an excellent choice for approximating line length for a better reading experience, for example
> Any time you would like to size an element responsively, min() can be a great choice
<!-- Responsive Element Sizing with min() -->
> consider this: min(64px, 15%, 10vw), size will not exceed one of those values at any given time, with the browser selecting whichever is the minimum computed value
> This definition works out to never having an avatar larger than 64px
> Particularly in a zoom scenario, the 10vw helps the size feel more relative
> and 15% helps keep the size relative to the element, which may have a more visually appealing result before the 10vw applies
<!-- Using min() Within Other Properties -->
> CSS math functions can be used in most properties that allow a numeric value
> One unique place to use them is within background-size
> consider this following senerio,  where min() is used to ensure the image doesn't exceed 600px while being allowed to respond down with the element by also setting 100%
> In other words, it will grow up to 600px and then resize itself down to match the element's width when it is less than 600px, `background-size: min(600px, 100%);`

max(): 
> Practical purpose of max(): setting boundaries on the minimum allowed value in a way that encompasses the responsive context of an element
> max() is the opposite of min()! So now we are setting up definitions for the minimum allowed values
<!-- Contextual Margins with max() -->
> max() gives us one way to in particular handle margins more gracefully, to tackle zoomed in view among different devices
> avoid pixel values for everything in my personal work and usually prefer rem for smaller spaces (opionionated)
> but for larger spaces, which allows relative growth for tall viewports and reduces distance for shorter viewports, which also applies to zoomed viewports (opionionated) `.element + .element { margin-top: max(8vh, 2rem); }`
> On the taller viewports, 8vh will be used, and on smaller or zoomed-in viewports, 2rem will be used
<!-- Prevent Browser Zoom on Inputs in iOS with max() -->
> `input { font-size: max(16px, 1rem); }`
> Where 1rem could be swapped with a Sass variable or a CSS custom property
> This use of max() ensures that regardless of another value provided, the font-size will be at least 16px and therefore prevent the forced browser zoom
<!-- Relative Focus Outlines with max() -->
> by using max(), we ensure a minimum outline size of 2px, while allowing it to grow relative to the element by using the font-relative em value `--outline-size: max(2px, 0.08em);`
<!-- Accessible Target Sizes with max() -->
> target" refers to the area that will receive a pointer event (ex. mouse click or touch tap)
> we can use max() similarly to when we provided a guardrail to prevent the input zooming
> We'll set 44px as one of the values within max() so that at minimum, that is the element's size `.icon-button { width: max(44px, 2em); height: max(44px, 2em); }`
> It should be noted that this criterion also considers the space around the element, which if combined with the element's actual size is at least 44px, then the criterion is passed successfully
<!-- Using max() As A Fallback for CSS aspect-ratio -->
> Another way to use max() is to set an image height when using aspect-ratio to enable an acceptable experience for browsers that do not yet support that property