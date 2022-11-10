# Buildrriculum
**Live at:** https://velthas.github.io/buildrriculum

Buildrriculum is an application to create and save your very own resume. 

It was created using react and heavily relies on state and props to get the job done.

## 1. Functionality
Buildrriculum was designed to provide an interactive cv building experience to the user. An example of this can be seen in how the add/edit/remove flow is handled. 

Hovering on any section will cause a button to appear on either the top left or top right of the given section. Depending on the section, that button may prompt the user to either add something, or edit what's already there.

For example, hovering the 'image' portion of the CV will cause an edit button to pop up on the top right: by clicking it, a form will appear, prompting the user to insert the URL of their image of choice. 

By contrast, hovering those sections that are not pre-defined and thus require user input (I.e Work/Education sections) will only display an 'Add' button. You may ask, does this mean I cannot edit or delete what I insert? Of course not.

By hovering each of these newly added entries, you will be able to spot a pencil and trashcan icon on either the right( for languages and skills) or bottom right of the entry (work and education). Let's have a look at what they do:

 - **Pencil Icon**: will display a form with the info of the entry you are trying to edit. Any and all modifications done will be displayed if changes are confirmed
 - **Trashcan Icon**: be careful with this one, because it will delete the entry right away and ask no confirmation.

Last but not least, once you are done editing everything with your info, you can print your work using the save as pdf button located directly below the CV. The print will preserve all styling, so congratulations! Your new CV is good and done!

## 2. Technologies
List of technologies/libraries used to build this project:

 - HTML, CSS, JavaScript
 - React
 - Webpack
 - Babel
 - Uniqid
 - ReactToPrint

## 3. Credits
Icons for this project were taken from Google Material Icons.
Fonts used are Roboto & Montserrat.
