There are three main principles that should be followed when designing error-correction flows:
    > error message should be easy to notice and understand
    > field(s) in error should be easy to locate
    > users shouldn’t have to memorize the instructions for fixing the error
if users don’t know that there is a problem with their input, they won’t be able to fix it
people shouldn’t have to hunt for the error through the form
they shouldn’t have to remember how to fix the problem while they’re fixing it: the instructions should be right in front of their eyes

guidelines for designing error flows:
>> Aim for Inline Validation Whenever Possible: 
    > Ideally, all validation should be inline: that is, as soon as the user has finished filling in a field, an indicator should appear nearby if the field contains an error
>> Indicate Successful Entry for Complex Fields: 
    > Inline validation can also be used to indicate successful completion. For example, if your users must create a unique username, a green checkmark and a message that the username is available let users know they can proceed to the next step
    > However, don’t go overboard with success indicators. Success indicators shouldn’t distract users from filling out forms and should only be used when the additional context helps complete the form faster or more accurately
>> Keep Error Messages Next to Fields: 
    > But even when the fields are not validated inline, it pays off to show an actionable error message below or next to the problem field in order to help the user fix the error
    > it should be explicit, human-readable, polite, precise, and should give constructive advice
    > Keeping error messages next to the fields in error minimizes working-memory load: users can see the error message while fixing the error instead of having to remember it
>> Use Color to Differentiate Errors from Normal Field States:
    > Together with color, an icon to the left of your error message or validation summary will draw attention to the error and also help users who are color blind
    > A subtle pulse or bounce animation on the icon corresponding to an error can further draw users’ attention to the error, but dont abuse animation as it could get overwhelming
>> Use Modals or Confirmation Dialogs Sparingly: 
    > they have these two disadvantages namely, they are disruptive and thatb popped out window needs to be closed before error can be fixed
>> Don’t Validate Fields Before Input is Complete:
    > In most cases, avoid showing the error until the user has finished with the field and moved to the next field. It can be annoying to see an error message before being given the opportunity to finish typing
>> Don’t Use Validation Summaries as the Only Indication of an Error: 
    > A validation summary can give the user a global understanding of all the errors in a form, but shouldn’t be used as the only form of error indication, as it forces the user to search for the field in error
    > moreover, the error message may no longer be present in the viewport when the user reaches the error field, thus forcing the user to memorize the error message while fixing the issue
>> Don’t Use Tooltips to Report Errors: 
    > some alert icons are hard to notice
    > users may wonder what is wrong with the field, without realizing that they can actually see the error message if they take an extra step
    > why make users work more (i.e., hover or move focus to field) in order to see the error message
>> Provide Extra Help for Repeated Errors
    > We recommend reviewing analytics data for repeated errors and then reviewing (or testing) the design to try to improve it. A rewritten error message would often be the first thing to try
    > As more of a band-aid solution, you can also show a link to more detailed help information or documentation after a user has made the same error too many times

Error flows should be designed to help users fix the mistakes in a form and advise them how to avoid making more

10 Usability Heuristics for User Interface Design
>> Visibility of system status: 
    > design should always keep users informed about what is going on, through appropriate feedback within a reasonable amount of time
>> Match between system and the real world: 
    > design should speak the users' language
    > Use words, phrases, and concepts familiar to the user, rather than internal jargon
    > Follow real-world conventions, making information appear in a natural and logical order
>> User control and freedom: 
    > user need a clearly marked "emergency exit" to leave the unwanted action without having to go through an extended process
>> Consistency and standards:
    > Users should not have to wonder whether different words, situations, or actions mean the same thing
    > Follow platform and industry conventions
>> Error prevention: 
    > Good error messages are important, but the best designs carefully prevent problems from occurring in the first place
    > Either eliminate error-prone conditions, or check for them and present users with a confirmation option before they commit to the action
>> Recognition rather than recall:
    > Minimize the user's memory load by making elements, actions, and options visible
    > user should not have to remember information from one part of the interface to another
    > Information required to use the design (e.g. field labels or menu items) should be visible or easily retrievable when needed
>> Flexibility and efficiency of use: 
    > Shortcuts — hidden from novice users — may speed up the interaction for the expert user such that the design can cater to both inexperienced and experienced users
    > Allow users to tailor frequent actions
>> Aesthetic and minimalist design: 
    > Interfaces should not contain information which is irrelevant or rarely needed
    > Every extra unit of information in an interface competes with the relevant units of information and diminishes their relative visibility
>> Help users recognize, diagnose, and recover from errors
    > Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution
>> Help and documentation: 
    > it may be necessary to provide documentation to help users understand how to complete their tasks