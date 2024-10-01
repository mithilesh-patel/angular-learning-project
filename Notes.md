# 1. Structural attributes

ChatGPT: 

In Angular, **structural directives**  are special types of directives that allow you to modify the structure of the DOM by adding or removing elements dynamically. They are called **structural attributes**  because they typically use an attribute-like syntax (`*` syntax) to mark elements whose structure will be altered.
These directives work by changing the structure of the DOM based on some condition or iteration. The most common structural directives in Angular are:
 
1. **`*ngIf`** : Conditionally includes or excludes an element based on a boolean expression.

```html
<div *ngIf="isVisible">
  This content is visible if isVisible is true.
</div>
```
 
2. **`*ngFor`** : Iterates over a list (array or collection) and renders the corresponding DOM elements for each item.

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
 
3. **`*ngSwitch`** : Displays one element tree out of many based on a switch expression.

```html
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Color is red</p>
  <p *ngSwitchCase="'blue'">Color is blue</p>
  <p *ngSwitchDefault>Unknown color</p>
</div>
```
Why the `*` in Structural Directives?The asterisk (`*`) in structural directives is syntactic sugar. It indicates that Angular will expand the HTML template into a template reference, which it uses to modify the DOM.
For example, the following:


```html
<div *ngIf="isVisible">Hello</div>
```

is transformed into:


```html
<ng-template [ngIf]="isVisible">
  <div>Hello</div>
</ng-template>
```

### How Structural Directives Work: 
 
- They **add**  or **remove**  DOM elements dynamically based on a condition (`*ngIf`) or loop (`*ngFor`).
 
- The `*ngIf` removes elements from the DOM when the condition is false, while `*ngFor` generates DOM elements for each item in a collection.

### Key Points: 

- Structural directives do not manipulate the existing DOM; instead, they create new DOM elements based on the logic you provide.

- Only one structural directive can be applied per element. However, you can nest them or use container elements to apply multiple directives logically.

Structural directives are essential in building dynamic and responsive user interfaces in Angular.


# 2. Attribute Directives





# 3 SPA (Single Page Application)

# 4 REST API Notes

# 5 REST API POST Notes

# 6 REST API POST
