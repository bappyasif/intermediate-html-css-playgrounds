**Regular Expressions Clearly Explained with Examples**
*regular expression is a sequence of characters that specifies a search pattern in any given text (string)*

**Basic regex characters you need to know**

*Characters*
    > Escape character: \
    > Any character: .
    > Digit: \d
    > Not a digit: \D
    > Word character: \w
    > Not a word character: \W
    > Whitespace: \s
    > Not whitespace: \S
    > Word boundary: \b
    > Not a word boundary: \B
    > Beginning of a string: ^
    > End of a string: $

*Groupings*
    > Matches characters in brackets: [ ]
    > Matches characters not in brackets: [^ ]
    > Either or: |
    > Capturing group: ( )

*Quantifiers*
    > 0 or more: *
    > 1 or more: +
    > 0 or 1: ?
    > An exact number of characters: { }
    > Range of number of characters: {Minimum, Maximum}

***Regex examples***
>> Phone number:
    > We would like to break up these phone numbers into 3 individual components: area code (first 3 digits), exchange (next 3 digits), and line number (last 4 digits).
    > number patterns here are not always consistent i.e. they have inconsistent parentheses, hyphens, and spaces but regular expression will help us mitigate that easily
    > regex_pattern = ".?(\\d{3}).*(\\d{3}).*(\\d{4})"
        > .? 0 or 1 character to account for the optional open parenthesis
        > (\\d{3}) 3 digit characters (first capture group i.e. first 3 digits)
        > .* 0 or more characters to account for the optional closing parenthesis, hyphen, and space characters
        > (\\d{3}) 3 digit characters (second capture group i.e. next 3 digits)
        > .* 0 or more characters to account for the optional hyphen and space characters
        > (\\d{4}) 4 digit characters (third capture group i.e. last 4 digits)
>> Date:
    > Suppose we have another data frame called date, which consists of dates with inconsistent delimiters and we want to extract the days, months, and years
    > regex_pattern = "(\\d{2}).(\\d{2}).(\\d{4})"
        > (\\d{2}) 2 digit characters (first capture group i.e. day)
        > . a single character to account for all special characters
        > (\\d{2}) 2 digit characters (second capture group i.e. month)
        > . a single character to account for all special characters
        > (\\d{4}) 4 digit characters (third capture group i.e. year)

>> Names: 
    > Let’s now learn how to capture words and letters, with people’s family names, titles, and given names
    > regex_pattern = "(\\w+),\\s(Mr|Ms|Mrs|Dr).?\\s(\\w+)"
        > (\\w+) 1 or more word characters (first capture group i.e. family name)
        > , comma character
        > \\s a single whitespace character
        > (Mr|Ms|Mrs|Dr) Mr, Ms, Mrs or Dr (second capture group i.e. title)
        > .? 0 or 1 full stop character after title
        > \\s a single whitespace character
        > (\\w+) 1 or more word characters (third capture group i.e. given name)

>> URLs: 
    > another example of strings with words and letters
    > regex_pattern = "(https?)://(www)?.?(\\w+).(\\w+)/?(\\w+)?"
        > (https?) http or https (first capture group i.e. schema)
        > :// specific special character string
        > (www)? optional www (second capture group i.e. subdomain)
        > .? 0 or 1 full stop character
        > (\\w+) 1 or more word characters (third capture group i.e. second-level domain)
        > . a single full stop character
        > (\\w+)1 or more word characters (fourth capture group i.e. top-level domain)
        > /? 0 or 1 backslash character
        > (\\w+)? optional 1 or more word characters (fifth capture group i.e. subdirectory)
    
>> Email address:
    > Suppose we have a list of emails in a data frame, that contain both letters and numbers
    > regex_pattern = "([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)"
        > ([a-zA-Z0-9\\_\\-\\.]+) 1 or more lowercase letters, uppercase letters, digits, and special characters including underscore, hyphen, and full stop (first capture group i.e. username)
        > @ at symbol
        > ([a-zA-Z]+) 1 or more lowercase and uppercase letters (second capture group i.e. domain name)
        > . a single full stop character
        > (.+) 1 or more characters (third capture group i.e. domain)

>> Address: 
    > The goal is to retrieve the house number, street name, suburb, state, and postcode
    > regex_pattern = "(\\d*)\\s?(.+),\\s(.+)\\s([A-Z]{2,3})\\s(\\d{4})"
        > (\\d*) 0 or more digit characters because some addresses do not have house numbers (first capture group i.e. house number)
        > \\s? 0 or 1 whitespace character
        > (.+) 1 or more characters (second capture group i.e. street name)
        > , comma
        > \\s? 0 or 1 whitespace character
        > (.+) 1 or more characters (second capture group i.e. street name)
        > \\s a single whitespace character
        > ([A-Z]{2,3}) 2 or 3 uppercase letters (fourth capture group i.e. state)
        > \\s a single whitespace character
        > (\\d{4}) 4 digit characters (fifth capture group i.e. postcode)



**Regular expression syntax cheatsheet**
> .
    > Matches any single character except line terminators: \n, \r, \u2028 or \u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day"
    > nside a character class, the dot loses its special meaning and matches a literal dot
> \d
    > Matches any digit (Arabic numeral)
    > Equivalent to [0-9]. For example, /\d/ or /[0-9]/ matches "2" in "B2 is the suite number"
> \D
    > Matches any character that is not a digit (Arabic numeral)
    > Equivalent to [^0-9]. For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number"
> \w
    > Matches any alphanumeric character from the basic Latin alphabet, including the underscore
    > Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D"
> \W
    > Matches any character that is not a word character from the basic Latin alphabet
    > Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%"
> \s
    > Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces
    > Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, /\s\w*/ matches " bar" in "foo bar"
> \S
    > Matches a single character other than white space
    > Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]. For example, /\S\w*/ matches "foo" in "foo bar"
> \t
    > Matches a horizontal tab
> \r
    > Matches a carriage return
> \n
    > Matches a linefeed
> \v
    > Matches a vertical tab
> \f
    > Matches a form-feed
> [\b]
    > Matches a backspace. If you're looking for the word-boundary character (\b)
> \0
    > Matches a NUL character
    > Do not follow this with another digit
> \
    > For characters that are usually treated literally, indicates that the next character is special and not to be interpreted literally


**Assertions**
*Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)*
> ^
    > Matches the beginning of input
    > If the multiline flag is set to true, also matches immediately after a line break character
    > For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A"
    > This character has a different meaning when it appears at the start of a group
> $
    > Matches the end of input
    > If the multiline flag is set to true, also matches immediately before a line break character
    > For example, /t$/ does not match the "t" in "eater", but does match it in "eat"
> \b
    > Matches a word boundary
    > This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space
    > Note that a matched word boundary is not included in the match
    > In other words, the length of a matched word boundary is zero
    > examples:
        > /\bm/ matches the "m" in "moon"
        > /oo\b/ does not match the "oo" in "moon", because "oo" is followed by "n" which is a word character
        > /oon\b/ matches the "oon" in "moon", because "oon" is the end of the string, thus not followed by a word character
        > /\w\b\w/ will never match anything, because a word character can never be followed by both a non-word and a word character
> \B
    > Matches a non-word boundary
    > This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces
    > The beginning and end of a string are considered non-words
    > Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday"

**Other assertions**
> x(?=y)
    > Lookahead assertion: Matches "x" only if "x" is followed by "y"
    > For example, /Jack(?=Sprat)/ matches "Jack" only if it is followed by "Sprat"
    > /Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost"
    > However, neither "Sprat" nor "Frost" is part of the match results
> x(?!y)
    > Negative lookahead assertion: Matches "x" only if "x" is not followed by "y"
    > For example, /\d+(?!\.)/ matches a number only if it is not followed by a decimal point
    > /\d+(?!\.)/.exec('3.141') matches "141" but not "3"
> (?<=y)x
    > Lookbehind assertion: Matches "x" only if "x" is preceded by "y"
    > For example, /(?<=Jack)Sprat/ matches "Sprat" only if it is preceded by "Jack"
    > /(?<=Jack|Tom)Sprat/ matches "Sprat" only if it is preceded by "Jack" or "Tom"
    > However, neither "Jack" nor "Tom" is part of the match results
> (?<!y)x
    > Negative lookbehind assertion: Matches "x" only if "x" is not preceded by "y"
    > For example, /(?<!-)\d+/ matches a number only if it is not preceded by a minus sign
    > /(?<!-)\d+/.exec('3') matches "3"
    > /(?<!-)\d+/.exec('-3') match is not found because the number is preceded by the minus sign

**Groups and ranges**
> x|y
    > Matches either "x" or "y"
    > For example, /green|red/ matches "green" in "green apple" and "red" in "red apple"
> [xyz]
[a-c]
    > A character class
    > Matches any one of the enclosed characters
    > You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character
    > For example, [abcd] is the same as [a-d]
    > They match the "b" in "brisket", and the "a" or the "c" in "arch", but not the "-" (hyphen) in "non-profit"
    > For example, [abcd-] and [-abcd] match the "b" in "brisket", the "a" or the "c" in "arch", and the "-" (hyphen) in "non-profit"
    > For example, [\w-] is the same as [A-Za-z0-9_-]
    > They both match any of the characters in "no_reply@example-server.com" except for the "@" and the "."
> [^xyz]
[^a-c]
    > A negated or complemented character class (The ^ character may also indicate the beginning of input)
    > That is, it matches anything that is not enclosed in the brackets
    > You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character class as a normal character.
    > For example, [^abc] is the same as [^a-c]
    > They initially match "o" in "bacon" and "h" in "chop"
> (x)
    > Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar"
    > Matches are accessed using the index of the result's elements ([1], ..., [n]) or from the predefined RegExp object's properties ($1, ..., $9)
    > Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses
    > String.match() won't return groups if the /.../g flag is set. However, you can still use String.matchAll() to get all matches
> \n
    > Where "n" is a positive integer
    > A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses)
    > For example, /apple(,)\sorange\1/ matches "apple, orange," in "apple, orange, cherry, peach"
> \k<Name>
    > A back reference to the last substring matching the Named capture group specified by <Name>
    > For example, /(?<title>\w+), yes \k<title>/ matches "Sir, yes Sir" in "Do you copy? Sir, yes Sir!"
    > \k is used literally here to indicate the beginning of a back reference to a Named capture group
> (?<Name>x)
    > Named capturing group: Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>
    > The angle brackets (< and >) are required for group name
    > For example, to extract the United States area code from a phone number, we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area
> (?:x)
    > Non-capturing group: Matches "x" but does not remember the match
    > The matched substring cannot be recalled from the resulting array's elements ([1], ..., [n]) or from the predefined RegExp object's properties ($1, ..., $9)

**Quantifiers**
> x*
    > Matches the preceding item "x" 0 or more times
    > For example, /bo*/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted"
> x+
    > Matches the preceding item "x" 1 or more times
    > Equivalent to {1,}
    > For example, /a+/ matches the "a" in "candy" and all the "a"'s in "caaaaaaandy"
> x?
    > Matches the preceding item "x" 0 or 1 times
    > For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle."
    > If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times)
> x{n}
    > Where "n" is a positive integer, matches exactly "n" occurrences of the preceding item "x"
    > For example, /a{2}/ doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy", and the first two "a"'s in "caaandy"
> x{n,}
    > Where "n" is a positive integer, matches at least "n" occurrences of the preceding item "x"
    > For example, /a{2,}/ doesn't match the "a" in "candy", but matches all of the a's in "caandy" and in "caaaaaaandy"
> x{n,m}
    > Where "n" is 0 or a positive integer, "m" is a positive integer, and m > n, matches at least "n" and at most "m" occurrences of the preceding item "x"
    > For example, /a{1,3}/ matches nothing in "cndy", the "a" in "candy", the two "a"'s in "caandy", and the first three "a"'s in "caaaaaaandy"
> x*?
x+?
x??
x{n}?
x{n,}?
x{n,m}?
    > By default quantifiers like * and + are "greedy", meaning that they try to match as much of the string as possible
    > The ? character after the quantifier makes the quantifier "non-greedy": meaning that it will stop as soon as it finds a match
    > For example, given a string like "some <foo> <bar> new </bar> </foo> thing":
        <> /<.*>/ will match "<foo> <bar> new </bar> </foo>"
        <> /<.*?>/ will match "<foo>"
