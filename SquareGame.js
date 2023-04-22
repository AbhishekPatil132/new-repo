var elements = document.getElementsByName('cssProperty');
// This creates array of values selected from these 3 dropdowns

let Div = document.getElementById('div');

function set()
{
  for(let index = 0; index<elements.length; index++)
    {
      let cssProperty = elements[index].getAttribute('id');
      // will return id of elements[index] as css property like here background,width and height.

      let cssValue = elements[index].value;
      // will return values of element[index] for css property like 'green',100px,100px.

      // when console.log(cssProperty,cssValue), This will return 'background green','width 100px','height 100px'.
    

      Div.style[cssProperty] = cssValue;
      // Div.style.background = green;
    }

    
}
document.getElementById('set').addEventListener('click',set);