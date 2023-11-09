### Conceptual Exercise

Answer the following questions below:

- What is React? 

When and why would you use it? React is a front end framework that specializes in creating reusable components. You can use it in just about any front end application because the reusable components make it a lot easier to build web applications.

- What is Babel?

Babel is a transpiler that converts JSX into JS.

- What is JSX?

JSX is essentially HTML written in JS for the purpopses of easily creating React components.

- How is a Component created in React?

A component is created by wrting a function that returns JSX, to be called when writing the component in JSX tags.

- What are some difference between state and props?
States and information within them do not pass down to the children from the parents, only props. Props are immutable while state are mutable.

- What does "downward data flow" refer to in React?

Downward data flow is the principle that data flow down from parent components to their children via props.

- What is a controlled component?

A controlled component is a component controlled by react instead of the DOM.

- What is an uncontrolled component?

An uncontrolled component is a component with state changes not controlled by react.

- What is the purpose of the `key` prop when rendering a list of components?

The `key` prop allows react to rapidly find components that are modified in order to re-render them.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

The key could be changed because arrays are mutable.

- Describe useEffect.  What use cases is it used for in React components?
useEffect runs code after rendering occurs. useEffect can be used for timers and communicating with an API.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef gives an object with a key of 'current'. Changing the ref value does not cause a rerender of a component.

- When would you use a ref? When wouldn't you use one?

You would use a ref when working with timers. You would not use a ref when trying to manipulate the DOM when state could easily achieve the same result.

- What is a custom hook in React? When would you want to write one?

A custom hook is a function starting with use that helps refactor duplicate code across multiple components.
You would write a custom hook when toggling a boolean state.
