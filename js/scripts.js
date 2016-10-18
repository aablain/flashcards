$(document).ready(function(){
    $(".comment").click(function(){
      $(".cardTitle").fadeToggle();
    });
    $(".randomize").click(function(){
      $(".cardTitle").hide();
      var random= Math.floor((Math.random()*19)+1);

      switch(random) {
        case 1:
        text="(/ˈdʒævəˌskrɪpt/) is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.";
        title="JavaScript (JS)";
          break;
        case 2:
        text="An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = y assigns the value of y to x.";
        title="Assigment Operators";
          break;
        case 3:
        text="A symbolic names for values in applications. The names of _______, called identifiers, conform to certain rules.";
        title="Variables";
          break;
        case 4:
          text="Must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters \"A\" through \"Z\" (uppercase) and the characters \"a\" through \"z\" (lowercase).";
          title="JavaScript identifier";
            break;
        case 5:
          text="A JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.";
          title="Functions";
            break;
        case 6:
          text="A function which is a property of an object. It exist two kind of methods: Instance Method which are built-in tasks performed by an object instance, or Static Methods which are tasks that can be performed without the need of an object instance.";
          title="Methods";
            break;
        case 7:
            text="A value (primitive or object) passed as input to a function.";
            title="Arguments";
              break;
        case 8:
            text="A _______ is a named variable passed into a function. __________ variables are used to import arguments into functions";
            title="Parameters";
              break;
        case 9:
            text="The ___________ ends function execution and specifies a value to be returned to the function caller.";
            title="Return Statement";
              break;
        case 10:
            text="Also known as Cascading, refers to repeatedly calling one method after another on an object, in one continuous line of code. This technique abounds in jQuery and other JavaScript libraries and it is even common in some JavaScript native methods";
            title="Chaining methods";
                break;
        case 11:
            text="The ______ global object is a constructor for ______, or a sequence of characters.";
            title="Strings";
                break;
        case 12:
            text="In computer science, a ______ is a logical data type that can have only the values true or false. A _______ is how a programming language lets you represent true and false. Without the ability to represent the ______ values a number of things in a language would no longer work.";
            title="Booleans";
                break;
        case 13:
            text="The global ________ property represents the primitive value _______. It is one of JavaScript's primitive types.";
            title="Undefined";
              break;
        case 14:
            text="The global ______ property is a value representing Not-A-Number.";
            title="NaN";
              break;
        case 15:
            text="The backslash _______ character turns special characters into string characters:";
            title="Escape";
                break;
        case 16:
            text="The ____ role is used to communicate an important and usually time-sensitive message to the user. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user about it. The alert role is most useful for information that requires the user's immediate attention, for example:";
            title="Alert";
                break;
        case 17:
            text="The _____ interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view. Comments are represented in HTML and XML as content between '<!--' and '-->'. In XML, the character sequence '--' cannot be used within a comment.";
            title="Comments";
                break;
        case 18:
            text="______is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.";
            title="jQuery";
                break;
        case 19:
            text="An _______ extends a tag, changing tag behavior or providing metadata. An attribute always has the form name=value (giving the attribute's identifier and the attribute's associated value).";
            title="Attributes";
                break;
        default:
          text="404";
          title="404";
}

      $(".cardText").html(text);
      $(".cardTitle").html(title);
    });



});
