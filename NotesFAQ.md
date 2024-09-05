# what is commonmodule in Angular

ChatGPT: 

The **The `CommonModule`**  in Angular is a module that provides many commonly used directives, pipes, and services to Angular applications. It is part of Angular's core library and is imported when working with components in any feature module or shared module.When you create an Angular module other than the root module (`AppModule`), you need to import `CommonModule` to access the common directives, pipes, and functionalities that are automatically available in the root module via `BrowserModule`.Key Directives and Pipes Provided by `CommonModule`Some of the important directives and pipes provided by `CommonModule` include:1. **Structural Directives** : 
- **`*ngIf`** : Conditionally includes or excludes an element from the DOM.
 
- **`*ngFor`** : Repeats a template for each item in a list.
 
- **`*ngSwitch`** : Switches between different elements based on a condition.
2. **Attribute Directives** : 
- **`ngClass`** : Dynamically adds or removes CSS classes.
 
- **`ngStyle`** : Dynamically sets CSS styles.
 
- **`ngModel`** : Provides two-way data binding for form inputs (though its full functionality is part of `FormsModule`).
3. **Common Pipes** : 
- **`date`** : Formats date and time.
 
- **`uppercase`**  and ****`uppercase`**  and `lowercase`** : Changes the case of strings.
 
- **`json`** : Converts an object to a JSON string for display.
 
- **`async`** : Handles Promises and Observables for template binding.
Why Use `CommonModule`? 
- When building a feature module or shared module, you typically import `CommonModule` to make use of the above utilities like `ngIf`, `ngFor`, and basic pipes.
 
- You **You do not import `BrowserModule`**  in feature modules because `BrowserModule` is meant for root modules and includes functionality needed for rendering in the browser (such as starting the Angular application). For feature modules, you import `CommonModule` to get access to the core Angular functionalities without duplicating `BrowserModule`.
Example of Using `CommonModule`If you have a feature module, you would import `CommonModule` as follows:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule], // This allows the use of common directives like *ngIf, *ngFor, etc.
  exports: [MyComponent]
})
export class MyFeatureModule { }
```
Here, `CommonModule` is imported to allow `MyComponent` to use directives like `*ngIf`, `*ngFor`, etc.
### Summary: 
 
- **`CommonModule`**  is used in feature and shared modules to provide basic Angular directives (`*ngIf`, `*ngFor`) and pipes.
 
- It is similar to `BrowserModule` but designed to be imported in feature modules to avoid duplication of services required for bootstrapping the application.
