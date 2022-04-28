Things to consider:
>> What type of data will be contained in the cells: 
>> You need to know beforehand if your data is mainly composed of short numerical strings like dates and amounts, or if it might contain more complex data like paragraphs of text, links and files
>> What is the user’s intended use for this table: 
    >> if users are expecting to  manipulate the data to scan and compare information in order to derive insights
    >> if it’s more action-driven like editing values, updating statuses and assigning people
>> Which types of devices will the table be viewed on: 
    >> interaction experience can vary greatly between a mobile device and a large desktop monitor
>> Does the table need to be actionable by the user: 
    >> user might need to modify values and delete entries as opposed to simply consulting a read-only table
>> Should the table offer customizable viewing options: 
    >> This is about how much help you want to provide the users in getting to what they want to see
    >> This can take many shapes; searching, filtering, sorting, adjusting the display density, etc

Elements of a table:
>> If we break it down to its core, a table is essentially made up of three things. Data, columns and rows
>> goal is to achieve peak table interaction by juggling all that can be done with those elements and finding the perfect balance for your specific enterprise software needs

Types of data: 
>> Whether that data is textual (strings, links, paragraphs) or numerical (amounts, dates, percentages), it deserves specific considerations to allow for an optimal experience
    >> Text
        >> Left-align text columns: 
            >> Everything that’s made up of letters should be left-aligned
        >> Match heading alignment to column: 
            >> Column names (a.k.a headers, heads, titles) should always align according to their column content
            >> Not following this rule creates off putting whitespaces and brings in unnecessary visual noise
            >> Don’t (ever) use center alignment: prevents quick scanning and noticing irregularities and ultimately makes the eye jump around unnecessarily
        >> Avoid duplication: 
            >> When possible, avoid repeating the title in every cell of a given column
    >> Numbers: 
        >> Right-align numeric columns: 
            >> Unlike text, numerical values are much easier to compare and contrast when they’re right-aligned
            >> goal here is to align numbers according to the position of the decimal
        >> Use tabular typography: 
            >> It is highly recommended to use a monospace font for numerical values
            >> This type of typography is much easier to scan and compare
            >> instead of having proportional spacing (where “W” is wider than “I”, or “9” wider than “1”), all characters are the same size
            >> This avoids such problems as $1,111.11 looking visually smaller than $999.99
    >> Some exceptions: 
        >> If the first column is a date written in numbers, it is recommended to use left-align
        >> all qualitative numbers can be flexible to accommodate such a situation
                    Quantitative numbers (always right-aligned)
                        Amounts (money, quantities)
                        Measures
                        Percentages
                    Qualitative numbers (can be left-aligned)
                        Date
                        Zip/Postal code
                        Phone number
>> Otherwise, all numbers should always be right-aligned
            
Collumns:
>> columns of a table house the distinctive types of information relating to the row/record
    >> Column separators: 
        >> Vertical separators can make the table become visually busy
        >> They are not always necessary
        >> Make sure you stick to a very thin border of 1px max and a light grey colour
Rows: 
>> rows of a table are the distinct records, the core entities of data being displayed
>> They deserve more visual distinction

Division styles: 
>> Zebra Stripes:
    >> When rows have a background colour alternating between white and a light grey, that’s called zebra stripes
    >> This used to be a widespread practice but has become more difficult to manage with increasing levels of interactivity
    >> It can become tricky, when using zebra stripes, to effectively differentiate between disabled, hover, focused and active states
        
Line Divisions:
>> A simple line division can do the trick just fine
>> Make sure the border colour is light enough as to not become visual noise
>> It needs to melt into the background

“card” approach: 
>> This is a great option to leverage if your app already has a slight background colour
        
Free form: 
>> If your data isn’t that dense or complex, you might be able to afford having a free form table, with no separators at all

Vertical alignment: 
>> This depends on how much variation exists between your cells’ content, or the row height
>> Use vertical center-align for when the row height varies only slightly (up to 3 lines)
>> Centering the text vertically within row height spreads out the white space within the table and thus eases visual scan
>> If row height varies more than 3 or 4 lines, using top-alignment makes most sense in terms of legibility and ensuring everything is visible
>> Multi-line cells should stick to the top of the cell to ensure everything is visible at first glance
>> Sticking to the bottom of the cells sometimes causes content to be hidden away (cells risk being clipped by browser viewport edges) and requires scrolling, but then if scrolling jumps to the next row, the experience is very jerky and disorienting and you risk never seeing the full cell content

Viewing options: 
>> Providing customizable viewing options is a great way to ease the experience of consulting complex tables
>> Having options like a ‘Columns Showed’ dropdown as well as an allocated spot for a horizontal scrollbar are great starting points
>> They’re aware they can customize the visible columns, and understand that it would enable the horizontal scroll if needed. It’s putting some power in their hands
    >> Column management: 
        >> Freeze: 
            >> In a horizontal scroll situation, having the leftmost column ‘sticky’ is just as important as the fixed header is for the regular vertical scroll
            >> Sometimes also the rightmost column which typically houses summary content such as totals
            >> Some of these preferences can be built in the table UI itself, or offered as options for the user to set up for themselves
            >> This can happen by having an options dropdown for each column heading
        >> Reorder & hide: 
            >> Giving your users control over what they see is a sure way to make the interaction more engaging and productive
            >> Forcing users to scroll through dozens of columns of data that’s not relevant to their particular role or goal overloads cognitive load and risks creating frustration
        >> Resize: 
            >> Giving users the option to resize columns is optional depending on the type of table you’re working with
            >> Actually, the best situation is when resizable columns are not needed because the table has proper spacing by default
            >> having a drag handle show up when hovering over column separators has come to be expected in editable tables, if there is any editable content
    >> Row management: 
        >> Display density: 
            >> Letting users adjust the density of the table is another powerful way to give them control and make them feel comfortable using the interface
            >> We all have preferred ways of reading and being able to customize your view is just a delight, especially for data-heavy tables that can otherwise feel overwhelming
            >> It also depends on the screen size; if I’m sitting at my desk and viewing the table on my monitor, I can afford a less dense UI and a more relaxed reading experience
            >> But if I need to quickly compare things on a smaller screen, that’s when I need to maximize the real estate and see more rows at once
            >> Typically, row density gravitates around these pixel measures:
                >> Condensed: 40px
                >> Regular: 48px
                >> Relaxed: 56px
            >> User controls for row density can simply live in an icon switcher outside the table.
        >> State preservation: 
            >> Whichever viewing options you provide your users with, it’s very important to allow their setup to be preserved throughout their browser session or under their user account for when they log back in
        >> Reset to default: 
            >> It’s also important to make sure you provide an option to reset the view to its original (a.k.a default or full) state
            >> Doing so creates in users a sense of security and trust in the feeling that they can explore the page and customize it without creating unwanted permanent changes
    >> Basic Navigation: 
        >> Scroll behaviour: 
            >> Make sure to allow smooth scrolling on both axes
            >> If scrolling is attached to the visibility of the rows and you have very high rows with multi-line textual cells, the experience will feel jerky
        >> Sticky Headers & Footers: 
            >> Having a sticky header is a great way to allow the user to keep context and navigate easily across the table
            >> For tables with actions displayed in a control panel row, the control panel should be included in that fixed part
            >> Or you can have the controls only appear once one row item or more are selected. They can appear as a toolbar fixed to the bottom of the window, allowing the user to keep context and easily know what they’re acting on
    >> Sorting, filtering & searching: 
        >> You should make sure to provide at least basic options like sorting columns
        >> Make sure your default makes sense for your type of data
        >> In the majority of cases, default sorting shows the most recent entries at the top (most recently created or modified) or entries most needing action (lowest inventory, most urgent priority)
        >> sort chevron shouldn’t interfere with the alignment of the heading relative to the column’s content
        >> Typical sorting options are:
            >> Alphabetical (A-Z)
            >> Alphabetical (Z-A)
            >> By recency (Oldest to newest)
            >> By recency (Newest to oldest)
            >> By size (Largest to smallest)
            >> By size (Smallest to largest)
>> Actionable Interactions: 
    >> Discoverability: Hover states: 
        >> Table interfaces are by nature very dense so our goal isn’t to overcharge the UI with buttons everywhere
        >> Instead, we should aim to opportunistically display the right interactions only when and where they are needed
        >> A table’s actionable interactions are typically afforded by hover states
        >> For the user, many different things can be uncovered through hover states; additional row details, bulk actions and inline editing functionalityy
        >> Discoverability is really key here
    >> Row details: 
        >> When the whole row is made to seem clickable upon hover, it hints to the idea that more details exist in a secondary view
        >> It’s possible that your rows only contain the generic data about the entries but that more qualitative details about them also needs to be displayed
        >> depending on your development resources and the amount of information needing to be shown can be put forward
    >> Expandable rows (inline):
        >> This is maybe a more technically costly option, but having clickable rows expand inline is an intuitive way to show more details
        >> By doing this, you’re creating blank space for more specific details to live either inside or outside the bounds of the columns
        >> This can be triggered by clicking the whole row or a chevron icon at the right or left edge of the row
    >> Modal: 
        >> Having a modal/overlay show up is a little bit more disruptive, as users are taken away from the context of the table. However, this is an easier option in terms of development
        >> The modal can be triggered by clicking on the whole row or something smaller like a “View More” link or a 3-dot menu icon
    >> Quick view sidebar: 
        >> most scalable option for this situation is the sidebar, If you need a lot of space and potentially even a scroll or subtabs to account for the additional information, this might be your best bet
        >> sidebar can be triggered by clicking the whole row, a “View More” link or a 3-dot menu icon
    >> Multi-select & bulk actions: 
        >> When a checkbox is shown upon hover, it hints to rows being actionable
        >> Such actions can include ‘Delete’, ‘Export’, ‘Duplicate’ or any functionality you want to provide your users with
        >> Once one or more rows are selected, only then is it relevant to display said actions
        >> This is a very smart use of space and helps reduce the page clutter
    >> Editing: 
        >> When a cell is made to look clickable with a text cursor on hover, it hints to the content being editable
        >> Allowing for edits to be made inline, i.e in the original table view, allows for the least friction and maintains the most context; the user will still be viewing neighbouring rows and columns, and only needs a small number of clicks to get going
        >> You can decide to add friction by making the fields only editable in the inline expandable rows
            >> This leaves less room for error since the user needs to click through to get editing
            >> This is useful for high-stakes data that shouldn’t be played with as much
        >> You can also leverage a modal and have it be composed of read-only and/or read-and-write input fields. You can always decide which content is editable, while still showing it all in one place
        >> Or, finally, the quick view sidebar can basically be formatted like a form, showing your data in a way the user is free to modify at will
    >> Feedback & confirmation: 
        >> Confirming the changes needs to be done when exiting the secondary view or exiting the inline cell. Either by clicking out, hitting ‘Enter’, or having a straightforward checkmark icon or ‘Save’ button