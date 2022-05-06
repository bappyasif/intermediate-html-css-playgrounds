CSS Functional Notation

> CSS functional notation is a type of CSS value that can represent more complex data types or invoke special data processing or calculations

> Functions can take multiple arguments, which are formatted similarly to CSS property values
> Whitespace is allowed, but they are optional inside the parentheses
> In some functional notations multiple arguments are separated by commas, while others use spaces

Transform functions
> These functions are used when the <transform-function> CSS data type is used as a value of >> > transform
    > matrix(): Describes a homogeneous 2D transformation matrix
    > matrix3d(): Describes a 3D transformation as a 4×4 homogeneous matrix
    > perspective(): Sets the distance between the user and the z=0 plane
    > rotate(): Rotates an element around a fixed point on the 2D plane
    > rotate3d(): Rotates an element around a fixed axis in 3D space
    > rotatex(): Rotates an element around the horizontal axis
    > rotatey(): Rotates an element around the vertical axis
    > rotatez(): Rotates an element around the z-axis
    > scale(): Scales an element up or down on the 2D plane
    > scale3d(): Scales an element up or down in 3D space
    > scalex(): Scales an element up or down horizontally
    > scaley(): Scales an element up or down vertically
    > scalez(): Scales an element up or down along the z-axis
    > skew(): Skews an element on the 2D plane
    > skewx(): Skews an element in the horizontal direction
    > skewy(): Skews an element in the vertical direction
    > translate(): Translates an element on the 2D plane
    > translate3d(): Translates an element in 3D space
    > translatex(): Translates an element horizontally
    > translatey(): Translates an element vertically
    > translatez(): Translates an element along the z-axis

Math functions: 
> The math functions allow CSS numeric values to be written as mathematical expressions
    > calc(): A math function that allows basic arithmetic to be performed on numerical CSS values
    > clamp(): A comparison function that takes a minimum, central, and maximum value and represents its central calculation
    > max(): A comparison function that represents the largest of a list of values
    > min(): A comparison function that represents the smallest of a list of values
    > abs(): Takes a calculation and returns the absolute value
    > and among others which are still eperimental and still undocumented in mdn

Filter functions:
> <filter-function> CSS data type represents a graphical effect that can change the appearance of an input image
> It is used in the filter and backdrop-filter properties
    > blur(): Blurs the image
    > brightness(): Makes the image brighter or darker
    > contrast(): Increases or decreases the image's contrast
    > drop-shadow(): Applies a drop shadow behind the image
    > grayscale(): Converts the image to grayscale
    > hue-rotate(): Changes the overall hue of the image
    > invert(): Inverts the colors of the image
    > opacity(): Makes the image transparent
    > saturate(): Super-saturates or desaturates the input image
    > sepia(): Converts the image to sepia

Color functions: 
> Functions which specify different color representations
> These may be used anywhere a <color> is valid
    > hsl(): HSL color model defines a given color according to its hue, saturation, and lightness components, with an optional alpha channel
    > hsla(): HSL color model defines a given color according to its hue, saturation, and lightness components, with an alpha channel for transparency
    > rgb(): RGB color model defines a given color according to its red, green, and blue components, with an optional alpha channel
    > rgba(): RGB color model defines a given color according to its red, green, and blue components, with an alpha channel for transparency
    > and among others potentially changeable functions, so currenly in experimental mode

Image functions: 
> These functions may be used wherever an <image> is valid as the value for a property
> conic-gradient(): Conic gradients transition colors progressively around a circle
> linear-gradient(): Linear gradients transition colors progressively along an imaginary line
> radial-gradient(): Radial gradients transition colors progressively from a center point (origin)
> repeating-linear-gradient(): Is similar to linear-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container
> repeating-radial-gradient(): Is similar to radial-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container
> repeating-conic-gradient(): Is similar to conic-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container
> cross-fade(): Can be used to blend two or more images at a defined transparency
> element(): Defines an <image> value generated from an arbitrary HTML element
> paint(): Defines an <image> value generated with a PaintWorklet

Counter functions: 
> counter functions are generally used with the content property, although in theory may be used wherever a <string> is supported
> counter(): Returns a string representing the current value of the named counter, if there is one
> counters(): Enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any
> symbols(): Lets you define counter styles inline, directly as the value of a property

Font functions: 
> font-variant-alternates property controls the use of alternate glyphs, the following functions are values for this property
> stylistic(), styleset(), character-variant(), swash(), ornaments(), annotation()

Shape functions: 
> following functions may be used as values for the <basic-shape> data type, which is used in the clip-path, offset-path, and shape-outside properties
> circle(): Defines a circle
> ellipse(): Defines an ellipse
> inset(): Defines an inset rectangle
> polygon(): Defines a polygon
> path(): Accepts an SVG path string to enable a shape to be drawn

Reference functions: 
> following functions are used as a value of properties to reference a value defined elsewhere
> attr(): Used to retrieve the value of an attribute of the selected element and use it in the stylesheet
> env(): Used to insert the value of a user agent-defined environment variable
> url(): Used to include a file
> var(): Used to insert a value of a custom property instead of any part of a value of another property

CSS grid functions: 
> following functions are used to define a CSS grid
> fit-content(): Clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument))
> minmax(): Defines a size range greater than or equal to min and less than or equal to max
> repeat(): Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern