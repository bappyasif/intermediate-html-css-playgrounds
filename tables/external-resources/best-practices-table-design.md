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