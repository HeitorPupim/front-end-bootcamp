# CSS content from sections 4 and 5

This has the same files of sections 1 to 3, which is the full site, but with CSS on its composition.

###### Class Attribute:

Can group of related items.

Allows to differentiate all attributes of the element.

Use it instead of html syntax like `<h1> ` or `<body>` ...

To select it you need to use dots. e.g:

```
.bacon {
	background-color: green;
}
```

###### ID Attribute:

It can only be used 1 time in all your CSS code. Only a single one.

To select it you nedd to use '#', e.g:

```
#heading {
	background-color: blue;
}
```

###### Class vs ID:

The **ID** Attribute is more specific/rellevant, so it will overwrite the color and shape if you have the same ellement in Class and ID. Furthermore, you can create some kind of layer using ID tag to change the last layer and Class to change the previous.

Classes carry predefinitions of the browser such as fonts, shapes and whatsoever. You can check it on chrome dev tools.

###### Pseudo Classes:

HTML elements can have differnt states. CSS can change based on state, for e.g.

hover - only changes when the mouse is over the ellement, like buttons, or so on.

e.g.

```
img:hover {
background-color: gold;
}
```

It will change the img. background to gold when the image is hovered by your mouse pointer.

###### Fav Icon

Icon that shows up on browser bar.
