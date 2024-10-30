'use client'

// React
import { useRef, useEffect, useState } from 'react'

// we use class to maintain a structure

/* Approaching with small problems :)
 Breaking down from codepen (HTML, CSS, JS[Babel?])
 1. HTML: Nested container div with div class="text"
 2. CSS: font-family, font-size, div(h, w, center), .dud (different color, not sure what it does)
 3. JS(dk what Babel is): JS compiler -> backwards compatible versions on older browers (ES6+) to ES5
 a. uses this 

 New problem: Can't use Codepen's JS(legacy React), need to make func comp

Func components: 2 Themes: 1. Hooks: useState, useEffect, useRef 2. Destructuring
OOP: 1. State 2. Identity 3. Encapsulation

useState: Manages state (like class instance variables)
useEffect: side effects (e.g., componentDidMount/Update)
useRef: mutable references (like class instance variables)
useCallback: memoized callbacks (optimize, store expensive function calls)

// 1. Define const ScrambleText = () => {
// 2. Destructure props (el(text), chars, update)
// 3. Return JSX (nutshell explanation) e.g. <div>!<>-_\\/[]{}—=+*^?#________</div>
// }

Const vs. Function?

NOTE: from codepen code, we don't have to pre-define FCF queue: {from: '', to: '', start: 0, end: 0, char?: string}
NOTE: this. instance when constructor called/run (JS run without private ___ properties)
This is language designed global instance variable that localizes any instance variable to its class
We need to think about how to initialize local resolve from Promise
Step: Break down what promise is
*/

/* BUG: Animation is instantaneous: Problem with Promise
Output also constantly adding one another


*/

// We won't use this because we're not constructing objects with class
interface ScrambleTextProps {
  phrases: string[] // We don't need to explicitly call phrases in function because element.innerText already accesses our text...
  className?: string
}

// NOTE: Idiomatic to declare helper func then hooks
// Async so order doesn't matter
// I suspect .current is how you init mutable objects that exist for the lifetime of the component
export default function ScrambleText({phrases, className}: ScrambleTextProps) {
  // useState returns stateful value, and a function to update it
  // useState<string>(initialState: string | (() => string)):[string, Dispatch<SetStateAction<string>>]
  // ^ i.e., initialState string directly | function that returns string (accepts both types)
  // '|' is union type operator (e.g., this or that type)
  // NOTE: Rather than making setText method const, structured well with useState
  const [displayText, setDisplayText] = useState('') // FCF that returns string


  const elementRef = useRef<HTMLDivElement>(null)
  const el = elementRef.current // make el keyword that stores current state of div
  const chars = '!<>-_\\/[]{}—=+*^?#________'
  // Define consts (not from codepen) for globalUIworkers (that execute animations)
  const frameRef = useRef(0)
  const frameRequestRef = useRef<number>(); // () passes argument initialize .current
  // In queue, we need start and end to compare against frameRef
  let queue: {from: string, to: string, start: number, end: number, char: string | null}[] = []

  // In codepen, update() returns chars attribute indexed minimum of random * chars length
  // Here, we'll define it as a FCF
  const randomChar = () => chars[Math.min(Math.floor(Math.random() * chars.length), chars.length - 1)]
  // Promise method
  const resolve_fn = useRef<(() => void) | null>(null);

  const setText = (newText: string) => {
    // We want to prevent runtime memory leaks, but this isn't a severe security risk
    // Problem: Inspect element?
    if (!elementRef.current) return Promise.reject(new Error('Element not found')) // if undef, reject & Explicitly fail

    const oldText = displayText // use state instead of innerText
    const length = Math.max(oldText.length, newText.length)
    // from and to are individual char
    for (let i = 0; i < length; i++) {
      let from = oldText[i] ?? ''
      let to = newText[i] ?? ''
      const start = Math.floor(Math.random() * 100) // Math.random() greatest integer > || < arg
      const end = start + Math.floor(Math.random() * 100)
      // push all variables we just defined
      queue.push({from, to, start, end, char: null})
    }
    // forgot cancel existing animation
    if (frameRequestRef.current) {
      cancelAnimationFrame(frameRequestRef.current)
    }

    // In codepen, they cancel AnimationFrame (to stop previous animation?)
    // declared frame = 0 and ran update();
    update();
    // Promise attribute
    return new Promise<void>((resolve) => {
      resolve_fn.current = resolve // we've variablized resolve executor function as itself
    })
  }
  // update()
  // else if frame >= end {}output += `<span class="dud">${text[i]}</span>` // text[i] === char
  const update = () => {
    let output = '';
    let complete = 0; // completion counter
    // We can't use map because there's multiple nested conditions
    // 1. continue construction of output when frame >= start, 2. complete counter when frame >= end, 3. else: += from
    for (let i = 0; i < queue.length; i++) {
      let {from, to, start, end, char } = queue[i]
      if (frameRef.current >= end) {
        complete++
        output += to
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar()
          queue[i].char = char
        }
        output += randomChar()
      } else {
        output += from
      }
      // Mut new displayText using state
      setDisplayText(output);
    }
    if (complete === queue.length ) {
      resolve_fn.current?.();
    } else {
      frameRequestRef.current = requestAnimationFrame(update)
      frameRef.current += 1
    }

    // Purpose of update is to run setText with output
    // Thing is, we'd be running requestAnimationFrame with void?
    // ^ Answer: 
    // setText(output)

    // webAPI callback next repaint
    // void callback doesn't matter since its merely for DOM side effects
    // frameRequestRef.current is mutable reference => id to stop animation (you see cancelAnimationFrame)
    frameRequestRef.current = requestAnimationFrame(update)
  };

  // I guess we can then have update method that binds
  // usually you'd have to setState, but state setter is directly used

  // useEffect(() => {}, []) <- we'll manage update 'side effect'
  // 2 params: imperative FCF (possibly cleanup), dependencies
  // text is our dependency. If it changes, we run the FCF in useEffect

  useEffect(() => {
    let counter = 0
    if (!elementRef.current) return
    // I think we declare update const nested in useEffect (new one every time)
    
    // FCF that uses React Hooks to cycle through phrases in setText
    // Is this cyclical?
    const next = () => {
      // .then() is a promise method. 
      setText(phrases[counter]).then(() => {setTimeout(next, 3000)})
      counter = (counter + 1) % phrases.length // Modulo for index range
      // 3000 ms delay for next callback
      
    }

    next(); // Thing is... 
      
    return () => {
      cancelAnimationFrame(frameRequestRef?.current ?? 0)
    }
  }, []); // Empty dependency array runs once on mount...

  // Final output (so concise, yet sophisticated)
  return (
    <div ref={elementRef} className={className}>
      {displayText}
    </div>
  )

}