Background: 
    >> The background property in CSS allows you to control the background of any element (what paints underneath the content in that element). It is a shorthand property, which means that it allows you to write what would be multiple CSS properties in one. Like this:
        body {
            background:
                url(sweettexture.jpg)    /* image */
                top center / 200px 200px /* position / size */
                no-repeat                /* repeat */
                fixed                    /* attachment */
                padding-box              /* origin */
                content-box              /* clip */
                red;                     /* color */
            }
    
    >> You can use any combination of these properties that you like, in almost any order (although the order recommended in the spec is above)
    
    >> There is a gotcha though: anything you don’t specify in the background property is automatically set to its default
        >> So if you do something like this: body { background-color: red; background: url(sweettexture.jpg);}
        >> background will be transparent, instead of red
            >> fix is easy though: just define background-color after background, or just use the shorthand (e.g. background: url(...) red;)
    >> Multiple backgrounds:
        >> CSS3 added support for multiple backgrounds, which layer over the top of each other
    
        >> Any property related to backgrounds can take a comma separated list, like this: body { background: url(sweettexture.jpg), url(texture2.jpg) black; background-repeat: repeat-x, no-repeat; }
    
        >> Each value in the comma separated list corresponds to a layer: the first value is the top layer, the second value is the second layer, and the background color is always the last layer

Overflow: 
    >> overflow property controls what happens to content that breaks outside of its bounds: imagine a div in which you’ve explicitly set to be 200px wide, but contains an image that is 300px wide
        >> That image will stick out of the div and be visible by default
        >> Whereas if you set the overflow value to hidden, the image will cut off at 200px

    >> Values:
        >> visible: content is not clipped when it proceeds outside its box, its also default value
        
        >> hidden: overflowing content will be hidden
        
        >> scroll: similar to hidden except users will be able to scroll through the hidden content
        
        >> auto: if the content proceeds outside its box then that content will be hidden whilst a scroll bar should be visible for users to read the rest of the content
        
        >> initial: uses the default value which is visible
        
        >> inherit: sets the overflow to the value of its parent element
        
>> Clearing floats: 
    >> One of the more popular uses of setting overflow, strangely enough, is float clearing

    >> This means that the element with overflow (any value except visible) will extend as large as it needs to encompass child elements inside that are floated (instead of collapsing), assuming that the height isn’t declared
    
    >> A better float clearing technique is the clearfix, as it doesn’t require you to alter the overflow property in a way you don’t need

    border-radius: syntax: 
    /* The syntax of the first radius allows one to four values */
    /* Radius is set for all 4 sides */
    border-radius: 10px;

    /* top-left-and-bottom-right | top-right-and-bottom-left */
    border-radius: 10px 5%;

    /* top-left | top-right-and-bottom-left | bottom-right */
    border-radius: 2px 4px 2px;

    /* top-left | top-right | bottom-right | bottom-left */
    border-radius: 1px 0 3px 4px;

    /* The syntax of the second radius allows one to four values */
    /* (first radius values) / radius */
    border-radius: 10px / 20px;

    /* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
    border-radius: 10px 5% / 20px 30px;

    /* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
    border-radius: 10px 5px 2em / 20px 25px 30%;

    /* (first radius values) / top-left | top-right | bottom-right | bottom-left */
    border-radius: 10px 5% / 20px 25em 30px 35em;

    /* Global values */
    border-radius: inherit;
    border-radius: initial;
    border-radius: revert;
    border-radius: revert-layer;
    border-radius: unset;
